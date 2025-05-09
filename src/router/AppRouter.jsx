import React, { useState, useContext } from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { StyleProvider } from '../styles/Styling_Context';
import CV_Web from '../pages/CV_Web.jsx';
import CV_Private_1p_A4 from '../pages/CV_Private_1p_A4.jsx';
import CV_Private_2p_A4 from '../pages/CV_Private_2p_A4.jsx';
import CV_Academic_A4 from '../pages/CV_Academic_A4.jsx';
import QAT_CV_1col_A4 from '../pages/QAT_CV_1col_A4.jsx';
import Cover_Letter, { CoverLetterContext } from '../pages/Cover_Letter.jsx';
import GeminiTest from '../pages/GeminiTest.jsx';

// Navigation component with export button and dropdown
const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isCoverLetterPage = location.pathname === '/cover-letter';
  
  // Use the CoverLetterContext when on the cover letter page
  const coverLetterContext = isCoverLetterPage ? useContext(CoverLetterContext) : null;
  
  // Function to get the current page name based on route
  const getCurrentPageName = () => {
    switch(location.pathname) {
      case '/':
      case '/cv-web':
        return 'Web-version';
      case '/cv-private-1p-a4':
        return 'Private 1-Page CV (A4)';
      case '/cv-private-2p-a4':
        return 'Private 2-Page CV (A4)';
      case '/cv-academic-a4':
        return 'Academic CV (A4)';
      case '/qat-cv-1col-a4':
        return 'QAT: 1-col CV (A4)';
      case '/cover-letter':
        return 'Cover Letter';
      case '/gemini-test':
        return 'Gemini Test';
      default:
        return 'Select CV Template';
    }
  };
  
  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  // Ensure we're properly using the context
  const handleEditToggle = () => {
    if (coverLetterContext) {
      console.log("Toggling edit mode from navigation");
      coverLetterContext.toggleEditing();
    }
  };

  // Export to PDF functionality
  const handleExport = useReactToPrint({
    content: () => {
      const printContents = document.querySelectorAll('[id^="cv-content"], [id^="cover-letter-content"]');
      const container = document.createElement('div');
      
      printContents.forEach((content, index) => {
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
          transform: scale(0.90);
          position: relative;
          max-height: 297mm;
          overflow: hidden;
          box-sizing: border-box;
        }

        [id^="cover-letter-content"] {
        transform: scale(0.90);
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
      <div className="container flex items-center">
        {/* Export2PDF Button */}
        <div className="mr-2">
          <button 
            onClick={handleExport}
            className="flex p-2 bg-blue-600 hover:bg-blue-700"
          >
            <span>Export to PDF</span>
          </button>
        </div>

        {/* Dropdown menu */}
        <div className="mr-2 relative">
          <button 
            onClick={toggleDropdown}
            className="flex p-2 bg-blue-600 hover:bg-blue-700 w-60 justify-between items-center"
          >
            <span>{getCurrentPageName()}</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute left-0 top-full bg-white w-60 z-10 shadow-lg mt-0">
              <Link 
                to="/cv-web" 
                className="block px-4 py-2 text-center text-gray-800 hover:bg-blue-500 hover:text-white"
                onClick={toggleDropdown}
              >
                Web-version
              </Link>
              <Link 
                to="/cv-private-1p-a4" 
                className="block px-4 py-2 text-center text-gray-800 hover:bg-blue-500 hover:text-white"
                onClick={toggleDropdown}
              >
                Private 1-Page CV (A4)
              </Link>
              <Link 
                to="/cv-private-2p-a4" 
                className="block px-4 py-2 text-center text-gray-800 hover:bg-blue-500 hover:text-white"
                onClick={toggleDropdown}
              >
                Private 2-Page CV (A4)
              </Link>
              <Link 
                to="/cv-academic-a4" 
                className="block px-4 py-2 text-center text-gray-800 hover:bg-blue-500 hover:text-white"
                onClick={toggleDropdown}
              >
                Academic CV (A4)
              </Link>
              <Link 
                to="/qat-cv-1col-a4" 
                className="block px-4 py-2 text-center text-gray-800 hover:bg-blue-500 hover:text-white"
                onClick={toggleDropdown}
              >
                QAT: 1-col CV (A4)
              </Link>
              <Link 
                to="/cover-letter" 
                className="block px-4 py-2 text-center text-gray-800 hover:bg-blue-500 hover:text-white"
                onClick={toggleDropdown}
              >
                Cover Letter
              </Link>
              <Link 
                to="/gemini-test" 
                className="block px-4 py-2 text-center text-gray-800 hover:bg-blue-500 hover:text-white"
                onClick={toggleDropdown}
              >
                Gemini Test
              </Link>
            </div>
          )}
        </div>
        
      </div>
    </nav>
  );
};

// Since Navigation is now using useLocation, we need to place it inside Router context
const AppRouterContent = () => {
  return (
    <StyleProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<CV_Web />} />
        <Route path="/cv-web" element={<CV_Web />} />
        <Route path="/cv-private-1p-a4" element={<CV_Private_1p_A4 />} />
        <Route path="/cv-private-2p-a4" element={<CV_Private_2p_A4 />} />
        <Route path="/cv-academic-a4" element={<CV_Academic_A4 />} />
        <Route path="/qat-cv-1col-a4" element={<QAT_CV_1col_A4 />} />
        <Route path="/cover-letter" element={<Cover_Letter />} />
        <Route path="/gemini-test" element={<GeminiTest />} />
      </Routes>
    </StyleProvider>
  );
};

// Main router component
const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppRouterContent />
    </BrowserRouter>
  );
};

export default AppRouter;
