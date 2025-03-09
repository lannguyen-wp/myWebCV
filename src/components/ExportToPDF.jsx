    import React, { useState } from 'react';
    import { useReactToPrint } from 'react-to-print';

    const ExportToPDF = () => {
    const [isExporting, setIsExporting] = useState(false);
    
    const handleExport = useReactToPrint({
        content: () => document.getElementById('cv-content'),
        documentTitle: 'MyCV',
        onBeforePrint: () => setIsExporting(true),
        onAfterPrint: () => setIsExporting(false),
        pageStyle: `
            @page {
                size: A4 portrait;
                margin: 10mm;
            }
            @media print {
                body {
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                button {
                    display: none !important;
                }
            }
        `
        });
    
    return (
        <div className="flex flex-col items-center mb-4 w-full">
        <button 
            onClick={handleExport}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
            disabled={isExporting}
        >
            {isExporting ? 'Exporting...' : 'Export to PDF'}
        </button>
        </div>
    );
    };

    export default ExportToPDF;
