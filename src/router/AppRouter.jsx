import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { StyleProvider } from '../styles/Styling_Context';
import Home from '../pages/Home.jsx';
import FullCV_A4_01 from '../pages/fullCV_A4_01.jsx';

// Navigation component with export button and dropdown
const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  // Export to PDF functionality
  const handleExport = useReactToPrint({
    content: () => {
      const cvContents = document.querySelectorAll('[id^="cv-content"]');
      const container = document.createElement('div');
      
      cvContents.forEach((content, index) => {
        // Create a proper page wrapper for each page
        const pageWrapper = document.createElement('div');
        pageWrapper.className = 'print-page-wrapper';
        
        // Clone the content and modify it for printing
        const clone = content.cloneNode(true);
        
        // Remove any problematic borders
        if (index === 0) {
          // First page: remove bottom borders
          const rightColumns = clone.querySelectorAll('.gridColRt');
          rightColumns.forEach(col => {
            col.style.borderBottom = 'none';
          });
        } else {
          // Subsequent pages: remove top borders
          clone.style.borderTop = 'none';
          const rightColumns = clone.querySelectorAll('.gridColRt');
          rightColumns.forEach(col => {
            col.style.borderTop = 'none';
          });
        }
        
        pageWrapper.appendChild(clone);
        container.appendChild(pageWrapper);
      });
      
      return container;
    },
    documentTitle: 'myCV',
    pageStyle: `
      @page {
        size: A4;
        margin: 0mm;
      }
      @media print {
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
        .print-page-wrapper {
          position: relative;
          height: 297mm;
          width: 210mm;
          page-break-after: always;
          break-after: page;
          overflow: hidden;
          box-sizing: border-box;
          margin-bottom: 0;
        }
        .print-page-wrapper:last-child {
          page-break-after: avoid;
          break-after: avoid;
        }
        [id^="cv-content"] {
          transform: scale(0.95);
          position: relative;
          max-height: 297mm;
          overflow: hidden;
          box-sizing: border-box;
        }
      }
    `,
  });

  return (
    <nav className="bg-gray-500 text-white p-2">
      {/* => navigation container */}
      <div className="container flex">
        {/* Export2PDF Button */}
        <div className="mr-2">
          <button 
            onClick={handleExport}
            className="flex p-2 bg-blue-600 hover:bg-blue-700"
          >
            <span>Export to PDF</span>
          </button>
        </div>
        {/* Dropdown - Use relative position for proper dropdown alignment */}
        <div className="ml-2 relative">
          {/* Dropdown button - Removed margin for perfect alignment */}
          <button 
            onClick={toggleDropdown}
            className="flex p-2 bg-blue-600 hover:bg-blue-700 w-60 justify-between items-center"
          >
            <span>Select CV Template</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {/* Dropdown menu - Positioned to align perfectly with button */}
          {isDropdownOpen && (
            <div className="absolute left-0 top-full bg-white w-60 z-10 shadow-lg mt-0">
              <Link 
                to="/home" 
                className="block px-4 py-2 text-center text-gray-800 hover:bg-blue-500 hover:text-white"
                onClick={toggleDropdown}
              >
                Web-version
              </Link>
              <Link 
                to="/fullcv-a4-01" 
                className="block px-4 py-2 text-center text-gray-800 hover:bg-blue-500 hover:text-white"
                onClick={toggleDropdown}
              >
                Full CV: A4 - Temp 01
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// Main router component
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <StyleProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/fullcv-a4-01" element={<FullCV_A4_01 />} />
        </Routes>
      </StyleProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
