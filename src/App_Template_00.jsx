import React, { useEffect, useState } from 'react';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Skills from './components/Skills.jsx';
import References from './components/References.jsx';
import Profile from './components/Profile.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import Publications from './components/Publications.jsx';
import ExportToPDF from './components/ExportToPDF.jsx';
import { LAYOUT, TEXT } from './styles/Styling.jsx';

const App = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    console.log('Fetching resume data...');
    fetch('/resumeData.json')
      .then(response => {
        console.log('Response received:', response);
        return response.json();
      })
      .then(data => {
        console.log('Data loaded:', data);
        setResumeData(data);
      })
      .catch(error => {
        console.error('Error fetching resume data:', error);
      });
  }, []);

  if (!resumeData) {
    return <div>Loading...</div>;
  }
  return (
    <div className={LAYOUT.pageContainer}>
        {/* Position the Export button outside the content */}
        <div className="fixed left-[200px] top-4">
            <ExportToPDF />
        </div>

        <div id="cv-content" className={LAYOUT.container}>
            {/* Using grid layout with classes from globalStyles */}
            <div className={LAYOUT.gridContainer}>
                {/* First row: two column layout */}
                <div className={LAYOUT.gridColLeft}>
                    {/* Left column for first row - can be empty or add content here */}
                </div>
                <div className={LAYOUT.gridColRightHeader}>
                    <h1 className={TEXT.myname}>{resumeData.personalInfo.name}</h1>
                    <p className={TEXT.mykeywords}>{resumeData.personalInfo.title}</p>
                </div>
                
                {/* Second row: two column layout */}
                <div className={LAYOUT.gridColLeft}>
                    <Contact contact={resumeData.contact} />
                    <Education education={resumeData.education} />
                    <Achievements achievements={resumeData.achievements} />
                    <Skills skills={resumeData.skills} />
                    <References references={resumeData.references} />
                </div>
                <div className={LAYOUT.gridColRightContent}>
                    <Profile profile={resumeData.profile} />
                    <WorkExperience workExperience={resumeData.workExperience} />
                    <Publications publications={resumeData.publications} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default App;