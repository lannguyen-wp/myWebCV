import React, { useState, useEffect, useRef } from 'react';
import { useStyle } from '../styles/Styling_Context';
import { Icon } from '../styles/Styling_Global.jsx';
import { loadResumeData } from '../utils/dataLoader.js';
import ReactQuill from 'react-quill'; // Import the editor
import 'react-quill/dist/quill.snow.css'; // Import the styles
import Quill from 'quill';

// Create a context to share editing state with Navigation component
export const CoverLetterContext = React.createContext({
  isEditing: false,
  toggleEditing: () => {}
});

// Register custom line spacing module
const Parchment = Quill.import('parchment');
const lineHeightConfig = {
  scope: Parchment.Scope.BLOCK,
  whitelist: ['1', '1.5', '2', '2.5', '3']
};
const LineHeightStyle = new Parchment.Attributor.Style('lineHeight', 'line-height', lineHeightConfig);
Quill.register(LineHeightStyle, true);

// Register custom spacing modules
const MarginTopStyle = new Parchment.Attributor.Style('marginTop', 'margin-top', {
  scope: Parchment.Scope.BLOCK,
  whitelist: ['0', '6pt', '12pt', '18pt', '24pt']
});
const MarginBottomStyle = new Parchment.Attributor.Style('marginBottom', 'margin-bottom', {
  scope: Parchment.Scope.BLOCK,
  whitelist: ['0', '6pt', '12pt', '18pt', '24pt']
});
Quill.register(MarginTopStyle, true);
Quill.register(MarginBottomStyle, true);

const Cover_Letter = ({ externalIsEditing }) => {
  const [resumeData, setResumeData] = useState(null);
  const [content, setContent] = useState('');
  const [htmlContent, setHtmlContent] = useState(''); 
  const [localIsEditing, setLocalIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const quillRef = useRef(null);
  
  // Use external state if provided, otherwise use local state
  const isEditing = externalIsEditing !== undefined ? externalIsEditing : localIsEditing;

  // Save the content when exiting edit mode
  const saveContent = async () => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const html = editor.root.innerHTML;
      console.log("Saving HTML:", html);
      setHtmlContent(html);
      setLocalIsEditing(false);

      // Save content to public/cover-letter-content.html
      try {
        const response = await fetch('/api/save-cover-letter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ content: html })
        });
        if (!response.ok) {
          throw new Error('Failed to save content');
        }
      } catch (error) {
        console.error('Error saving content:', error);
      }
    }
  };

  // Toggle function for local state only
  const toggleEditing = () => {
    if (isEditing) {
      saveContent();
    } else {
      setLocalIsEditing(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Load resume data
        const data = await loadResumeData();
        setResumeData(data);

        // Load content from public/cover-letter-content.html
        const response = await fetch('/cover-letter-content.html');
        if (response.ok) {
          const text = await response.text();
          setHtmlContent(text);
          setContent(text);
        } else {
          console.error('Failed to load cover letter content');
        }
      } catch (err) {
        setError('Failed to load data: ' + err.message);
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Create context value for sharing with Navigation
  // Use the explicitly defined toggle function
  const contextValue = React.useMemo(() => ({
    isEditing,
    toggleEditing
  }), [isEditing]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const styles = useStyle();
  const { COVERLETTER } = styles;
  
  // Get current date for auto-updating
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Define Quill modules (toolbar options)
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'align': [] }],
      [{ 'lineHeight': ['1', '1.5', '2', '2.5', '3'] }],
      [{ 'marginTop': ['0', '6pt', '12pt', '18pt', '24pt'] }], // Add marginTop options
      [{ 'marginBottom': ['0', '6pt', '12pt', '18pt', '24pt'] }], // Add marginBottom options
      ['clean']
    ],
  };
  
  // Define available formats
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent',
    'align', 'lineHeight',
    'marginTop', 'marginBottom' // Add marginTop and marginBottom to formats
  ];

  return (
    <CoverLetterContext.Provider value={contextValue}>
      <div className="flex justify-center w-full relative py-2">
        {/* Edit/Save Button - positioned to the left of the A4 page */}
        <div className="relative -left-10">
          {isEditing ? (
            <button 
              onClick={saveContent}
              className="w-[50px] items-center justify-center bg-blue-600 text-white hover:bg-green-700 py-2"
            >
              <span>Save</span>
            </button>
          ) : (
            <button 
              onClick={toggleEditing}
              className="w-[50px] items-center justify-center bg-blue-600 text-white hover:bg-green-700 py-2"
            >
              <span>Edit</span>
            </button>
          )}
        </div>
        
        {/* A4 page container - centered */}
        <div id="cover-letter" className={COVERLETTER.mainContainer}>
          <style dangerouslySetInnerHTML={{ __html: COVERLETTER.docxStyles }} />
          
          <div id="cover-letter-content" className={COVERLETTER.pageContainer}>
            <div className={COVERLETTER.contentWrapper}>
              <h1 className={COVERLETTER.nameHeading}>{resumeData.personalInfo.name}</h1>
              <div className={COVERLETTER.contactContainer}>
                {resumeData.contact.slice(0, 3).map((item, index) => (
                  <React.Fragment key={index}>
                    <span className={COVERLETTER.contactItem}>
                      <Icon type={item.iconType} className={COVERLETTER.contactIcon} />
                      {item.description}
                    </span>
                    <span className={COVERLETTER.contactSeparator}></span>
                  </React.Fragment>
                ))}
              </div>
              
              {/* Date */}
              <div className={COVERLETTER.dateContainer}>
                {currentDate}
              </div>
              
              {/* Content editor or display */}
              <div className={COVERLETTER.contentContainer}>
                {isEditing ? (
                  <ReactQuill
                    ref={quillRef}
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    modules={modules}
                    formats={formats}
                    className="h-full flex flex-col"
                    placeholder="Enter or paste your cover letter content here..."
                    style={{ height: "auto", minHeight: "400px", display: "flex", flexDirection: "column" }}
                  />
                ) : (
                  <div 
                    className="saved-content prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: htmlContent || "No content yet. Click 'Edit Cover Letter' to start writing." }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Custom styles for both Quill editor and saved content display */}
      <style jsx global>{`
        /* Styles for the editor */
        .ql-editor {
          line-height: 1.2 !important; /* Force reduced line spacing in edit mode */
          padding: 12px 15px !important; /* Better padding */
        }
        
        .ql-editor p {
          margin-bottom: 0.5em !important; /* Reduce space between paragraphs */
        }
        
        .ql-editor ul {
          list-style-type: disc !important;
          padding-left: 20px !important;
          margin-top: 0.5em !important;
          margin-bottom: 0.5em !important;
        }
        
        .ql-editor ol {
          list-style-type: decimal !important;
          padding-left: 20px !important;
          margin-top: 0.5em !important;
          margin-bottom: 0.5em !important;
        }
        
        .ql-editor li {
          margin-left: 0 !important;
          padding-left: 0 !important;
          margin-bottom: 0 !important; /* Remove space between list items in edit mode */
          line-height: 1.2 !important; /* Control line height for list items */
        }
        
        .ql-editor ul > li::before {
          font-size: 1.2em !important; /* Increase bullet points size */
          margin-right: 10px !important; /* Increase space between bullet point symbol and text */
        }
        
        /* Add spacing and styling for toolbar */
        .ql-toolbar.ql-snow {
          margin-bottom: 10px !important;
          padding: 8px !important;
          border-radius: 4px !important;
          background-color: #f3f4f6 !important;
          border-color: #d1d5db !important;
        }
        
        /* Styles for the saved content display */
        .saved-content ul {
          list-style-type: disc !important;
          padding-left: 30px !important;
        }
        
        .saved-content ol {
          list-style-type: decimal !important;
          padding-left: 30px !important;
        }
        
        .saved-content li {
          display: list-item !important;
          margin-bottom: 0 !important; /* No extra space between list items */
          line-height: 1.2 !important; /* Tight line height */
        }
        
        .saved-content p {
          margin-bottom: 0.7em !important; /* Add some spacing between paragraphs */
          line-height: 1.3 !important;
        }
      `}</style>
    </CoverLetterContext.Provider>
  );
};

export default Cover_Letter;
