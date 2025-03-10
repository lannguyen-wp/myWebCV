import React, { useState } from 'react';
import { useReactToPrint } from 'react-to-print';

const ExportToPDF = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = useReactToPrint({
    // Select all content containers
    content: () => {
      const pages = document.querySelectorAll('[id^="cv-content-"]');
      const container = document.createElement('div');
      pages.forEach(page => {
        container.appendChild(page.cloneNode(true));
      });
      return container;
    },
    documentTitle: 'MyCV',
    onBeforePrint: () => setIsExporting(true),
    onAfterPrint: () => setIsExporting(false),
    pageStyle: `
        @page {
            size: A4 portrait;
            margin: 0;
        }
        @media print {
            body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
                margin: 0;
                padding: 0;
            }
            button {
                display: none !important;
            }
            .page {
                page-break-after: always;
                break-after: page;
                page-break-inside: avoid;
                break-inside: avoid;
            }
        }
    `,
    scale: 1,
  });

  return (
    <button 
      onClick={handleExport}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded shadow no-print"
      disabled={isExporting}
    >
      {isExporting ? 'Exporting...' : 'Export to PDF'}
    </button>
  );
};

export default ExportToPDF;
