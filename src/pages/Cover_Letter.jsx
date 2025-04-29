import React, { useState, useEffect, createContext } from 'react';
import Header from '../components/Header_Academic.jsx';
import Contact_oneLine from '../components/Contact_oneLine_02.jsx';
import Textbox_base from '../components/Textboxes.jsx';
import { LAYOUT, baseLayout, HEADER } from '../styles/Styling_Academic_A4.jsx';
import { loadResumeData } from '../utils/dataLoader.jsx';
import parse from 'html-react-parser';

// Create a context to share editing state with other components
export const CoverLetterContext = createContext({
  isEditing: false,
  toggleEditing: () => {},
  saveContent: () => {}
});

const Cover_Letter = () => {
  const [resumeData, setResumeData] = useState(null);
  const [content, setContent] = useState('');
  const [localIsEditing, setLocalIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [showHtmlView, setShowHtmlView] = useState(false);
  const isEditing = localIsEditing;

  const toggleEditing = () => {
    setLocalIsEditing(prev => !prev);
  };

  const saveContent = () => {
    console.log('Saving content length:', content.length); // Log the length of the content being saved
    console.log('Saving content:', content); // Debug log to verify content being saved
    localStorage.setItem('coverLetterContent', content); // Save the full content to local storage
    setLocalIsEditing(false);
  };

  const toggleHtmlView = () => {
    // If we have analysis, toggle between showing original content and analysis
    if (analysis) {
      setShowHtmlView(prev => !prev);
    }
  };

  const analyzeWithGemini = async () => {
    if (!content.trim()) {
      alert('Please add some content to your cover letter first.');
      return;
    }

    setAnalyzing(true);
    try {
      const response = await fetch('http://localhost:4000/gemini-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          content: `Analyze the following cover letter and extract its key components. 
            Return a valid JSON object with the following structure:
            {
              "date": "Date from letter or today's date if missing",
              "recipient": {
                "name": "Full recipient name",
                "title": "Recipient title if available",
                "office": "Recipient office / department if available",
                "company": "Company name / institution if available",
                "address": "Full physical address if available"
              },
              "sender": {
                "name": "Sender's name"
              },
              "mainBody": ["Array of paragraphs in the main body"]
            }
            
            Cover letter content: ${content}` 
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      const analysisText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      console.log('Raw Gemini response:', analysisText);
      
      // Attempt to extract JSON from the response
      let jsonResult;
      try {
        // Look for JSON in the text (between ``` code blocks or standalone)
        const jsonMatch = analysisText.match(/```(?:json)?([\s\S]*?)```/) || 
                          analysisText.match(/({[\s\S]*})/) ||
                          [null, analysisText];
        
        const jsonText = jsonMatch[1].trim();
        console.log('Extracted JSON text:', jsonText);
        
        jsonResult = JSON.parse(jsonText);
        console.log('Parsed JSON:', jsonResult);
        
        // Validate and transform the structure if needed
        if (!jsonResult.date) jsonResult.date = new Date().toLocaleDateString();
        
        if (!jsonResult.recipient) jsonResult.recipient = {};
        if (typeof jsonResult.recipient === 'string') {
          jsonResult.recipient = { name: jsonResult.recipient };
        }
        
        if (!jsonResult.sender) jsonResult.sender = {};
        if (typeof jsonResult.sender === 'string') {
          jsonResult.sender = { name: jsonResult.sender };
        }
        
        // Ensure mainBody is an array of paragraphs
        if (!jsonResult.mainBody) {
          jsonResult.mainBody = [];
        } else if (typeof jsonResult.mainBody === 'string') {
          jsonResult.mainBody = [jsonResult.mainBody];
        } else if (jsonResult.mainBody.content) {
          // Handle case where mainBody might be an object with a content property
          if (Array.isArray(jsonResult.mainBody.content)) {
            jsonResult.mainBody = jsonResult.mainBody.content;
          } else if (typeof jsonResult.mainBody.content === 'string') {
            // Split the content into paragraphs if it's a single string
            jsonResult.mainBody = jsonResult.mainBody.content
              .split(/\n\n+/) // Split on multiple newlines
              .filter(p => p.trim().length > 0);
          }
        }
        
        // If mainBody is still not valid, try to extract it from text property
        if (!Array.isArray(jsonResult.mainBody) && jsonResult.text) {
          jsonResult.mainBody = jsonResult.text
            .split(/\n\n+/)
            .filter(p => p.trim().length > 0);
        }
        
        console.log('Transformed JSON structure:', jsonResult);
      } catch (parseError) {
        console.error('Failed to parse JSON:', parseError);
        // Fallback: Create a minimal structure from the raw text
        const paragraphs = analysisText
          .split(/\n\n+/)
          .filter(p => p.trim().length > 0);
          
        jsonResult = { 
          date: new Date().toLocaleDateString(),
          recipient: { name: "Hiring Manager" },
          sender: { name: resumeData?.qat_personalInfo?.fullName || "Applicant" },
          mainBody: paragraphs,
          text: analysisText 
        };
        console.log('Created fallback structure:', jsonResult);
      }
      
      setAnalysis(jsonResult);
    } catch (err) {
      console.error('Error analyzing with Gemini:', err);
      alert('Error analyzing content: ' + err.message);
    } finally {
      setAnalyzing(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await loadResumeData();
        setResumeData(data);
        const savedContent = localStorage.getItem('coverLetterContent');
        //console.log('Loaded saved content length:', savedContent?.length || 0); // Log the length of the loaded content
        //console.log('Loaded saved content:', savedContent); // Debug log to verify loaded content
        if (savedContent) {
          setContent(savedContent); // Directly set saved content
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

  // Add a new useEffect for tracking header colors
  useEffect(() => {
    if (!isLoading && resumeData) {
      // Log LAYOUT information
      console.log('LAYOUT.headerRow styles:', LAYOUT.headerRow);
      
      // Wait for component to render then get computed styles
      setTimeout(() => {
        // Track Header component colors
        const headerElement = document.querySelector('#cover-letter .page Header');
        if (headerElement) {
          console.log('Header element found:', headerElement);
          const headerStyles = window.getComputedStyle(headerElement);
          console.log('Header computed styles:', {
            color: headerStyles.color,
            backgroundColor: headerStyles.backgroundColor,
            fontFamily: headerStyles.fontFamily,
            fontSize: headerStyles.fontSize
          });
          
          // Check for any h1, h2, h3 elements within the Header
          const headerTags = headerElement.querySelectorAll('h1, h2, h3');
          headerTags.forEach((tag, index) => {
            const tagStyle = window.getComputedStyle(tag);
            console.log(`Header ${tag.tagName} ${index} styles:`, {
              text: tag.innerText,
              color: tagStyle.color,
              fontSize: tagStyle.fontSize,
              fontWeight: tagStyle.fontWeight
            });
          });
        } else {
          console.log('Header element not found in DOM');
        }
      }, 500);
    }
  }, [isLoading, resumeData]);

  // Add a reference to the styling constants for logging
  useEffect(() => {
    // Log styling constants to verify they're being imported correctly
    console.log('Styling constants:', {
      kwColor_text: baseLayout.kwColor_text,
      headerTitle: HEADER.headerTitle,
    });
  }, []);

  // Format the analyzed content into a structured cover letter
  const renderFormattedLetter = () => {
    if (!analysis) return null;
    
    const { date, recipient, sender, mainBody } = analysis;
    const recipientName = recipient?.name || '';
    const senderName = sender?.name || '';
    
    // Process main body content to ensure paragraphs are properly separated
    const mainBodyContent = Array.isArray(mainBody) 
      ? mainBody 
      : typeof mainBody === 'string' 
        ? [mainBody]
        : mainBody?.content 
          ? Array.isArray(mainBody.content) 
            ? mainBody.content 
            : [mainBody.content]
          : [];
    
    return (
      <div className="formatted-cover-letter">
        {/* Date */}
        {date && (
          <div className="mt-2 mb-2 text-right">
            <p>{date}</p>
          </div>
        )}
        
        {/* Recipient */}
        {recipient && (
          <div className="mb-12">
            {recipient.name && <p className='font-bold'>{recipient.name}</p>}
            {recipient.title && <p>{recipient.title}</p>}
            {recipient.office && <p>{recipient.office}</p>}
            {recipient.company && <p>{recipient.company}</p>}
            {recipient.address && <p>{recipient.address}</p>}
          </div>
        )}
        
        {/* Salutation */}
        <div className="mb-4">
          <p>Dear {recipientName || "Hiring Manager"},</p>
        </div>
        
        {/* Main Body */}
        <div className="mb-4">
          {mainBodyContent.map((paragraph, index) => (
            <p key={index} className="mb-4 text-justify">{paragraph}</p>
          ))}
        </div>
        
        {/* Closing */}
        <div className="mt-4">
          <p>Sincerely,</p>
          <p className="mt-8">{senderName || resumeData?.qat_personalInfo?.fullName || ""}</p>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CoverLetterContext.Provider value={{ isEditing, toggleEditing, saveContent }}>
      <div id="cover-letter" className={LAYOUT.mainContainer}>
        <div id="cover-letter-content" className={LAYOUT.pageContainer} style={{ position: "relative" }}>
          {/* Edit/Save Button - positioned 50px from the left edge of the A4 page */}
          <div style={{ position: "absolute", left: "-70px", top: "20px", zIndex: 10 }}>
            {isEditing ? (
              <button
                onClick={saveContent}
                className="w-[50px] items-center justify-center bg-green-600 text-white hover:bg-green-700 py-2"
              >
                <span>Save</span>
              </button>
            ) : (
              <button
                onClick={toggleEditing}
                className="w-[50px] items-center justify-center bg-blue-600 text-white hover:bg-blue-700 py-2"
              >
                <span>Edit</span>
              </button>
            )}
          </div>

          {/* Analyze with Gemini Button - positioned below Edit/Save button */}
          {!isEditing && content.trim() && (
            <div style={{ position: "absolute", left: "-70px", top: "70px", zIndex: 10 }}>
              <button
                onClick={analyzeWithGemini}
                disabled={analyzing}
                className="w-[50px] items-center justify-center bg-purple-600 text-white hover:bg-purple-700 py-2"
                title="Analyze with Gemini AI"
              >
                <span>{analyzing ? '...' : 'AI'}</span>
              </button>
            </div>
          )}

          {/* HTML/Gemini Toggle - positioned below AI button and only shown after analysis */}
          {!isEditing && analysis && (
            <div style={{ position: "absolute", left: "-70px", top: "120px", zIndex: 10 }}>
              <button
                onClick={toggleHtmlView}
                className="w-[50px] items-center justify-center bg-orange-500 text-white hover:bg-orange-600 py-2"
                title={showHtmlView ? "View as Textbox" : "View as HTML"}
              >
                <span>{showHtmlView ? "Text" : "HTML"}</span>
              </button>
            </div>
          )}

          <div className={`${LAYOUT.pageContainer_A4} page`}>
            <div className={LAYOUT.sectionContainer}>
              {/* Header and Contact */}
              <div className={LAYOUT.headerRow}>
                {/* <Header personalInfo={resumeData.qat_personalInfo} /> */}
                <div className={HEADER.headerContainer}>
                <h1 className={HEADER.headerName}>{resumeData.qat_personalInfo.name}</h1>
                <p className={HEADER.headerTitle}>{resumeData.qat_personalInfo.title_academic}</p>
              </div>
                <Contact_oneLine contact={resumeData.qat_contact} />
              </div>
              {/* Content */}
              <div className={`${LAYOUT.contentContainer} px-6`}>
                {isEditing ? (
                  <Textbox_base
                    value={content}
                    onChange={(newContent) => setContent(newContent)}
                    placeholder="Start writing your cover letter here..."
                  />
                ) : showHtmlView && analysis ? (
                  <div className={`saved-content ${LAYOUT.contentContainer}`}>
                    {renderFormattedLetter()}
                  </div>
                ) : (
                  <div className={`saved-content ${LAYOUT.contentContainer} whitespace-pre-wrap`}>
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
