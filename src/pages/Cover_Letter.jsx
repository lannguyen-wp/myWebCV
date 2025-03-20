import React, { useState, useEffect } from 'react';
import { useStyle } from '../styles/Styling_Context';
import { Icon } from '../styles/Styling_Global.jsx';
import { loadResumeData } from '../utils/dataLoader.jsx';
import Textbox_tinyMCE from '../components/Textbox_tinyMCE';
import { analyzeHTML, json2HTML } from '../utils/htmlEditor.jsx';
import parse from 'html-react-parser';

// Create a context to share editing state with Navigation component
export const CoverLetterContext = React.createContext({
  isEditing: false,
  toggleEditing: () => {}
});

const Cover_Letter = () => {
  // Move ALL hooks to the top of the component
  const styles = useStyle();
  const { COVERLETTER } = styles;
  
  const [resumeData, setResumeData] = useState(null);
  const [content, setContent] = useState(''); // Initialize content
  const [localIsEditing, setLocalIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const isEditing = localIsEditing;

  // Get current date for auto-updating
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const toggleEditing = () => {
    setLocalIsEditing(prev => !prev);
  };

  // Save content function
  const saveContent = () => {
    const htmlContent = content;
    //console.log('HTML Content:', htmlContent); 
    localStorage.setItem('coverLetterContent', htmlContent);
    setLocalIsEditing(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await loadResumeData();
        setResumeData(data);
        // Load content from local storage
        const savedContent = localStorage.getItem('coverLetterContent');
        if (savedContent) {
          const analysisResults = analyzeHTML(savedContent);
          const printHTML = json2HTML(analysisResults); 
          setContent(printHTML);
          //console.log("HTML structure as JSON: ", analysisResults);
          //console.log("HTML content from JSON: ", printHTML);
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CoverLetterContext.Provider value={{ isEditing, toggleEditing }}>
      <div className="flex justify-center w-full relative py-2">
        {/* Edit/Save Button - positioned to the left of the A4 page */}
        <div className="relative -left-[50px]">
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
                  <Textbox_tinyMCE
                    value={content}
                    onChange={newContent => setContent(newContent)}
                  />
                ) : (
                  <div className={`saved-content ${COVERLETTER.contentContainer}`}>
                    {parse(content || "No content yet. Click 'Edit Cover Letter' to start writing.")}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CoverLetterContext.Provider>
  );
};

export default Cover_Letter;
