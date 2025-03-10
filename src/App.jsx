import React, { useEffect, useState } from 'react';
import Contact_oneLine from './components/Contact_oneLine.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Skills from './components/Skills.jsx';
import References from './components/References.jsx';
import Profile from './components/Profile.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import Publications from './components/Publications.jsx';
import ExportToPDF from './components/ExportToPDF.jsx';
import { LAYOUT, TEXT, combineStyles } from './styles/Styling.jsx';

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
        <div className="fixed left-80 top-8">
            <ExportToPDF />
        </div>

        {/* Each page has its own container */}
        {/* First A4 Page */}
        <div id="cv-content-1" className={LAYOUT.container}>
            <div className={`${LAYOUT.page} page`}>
              <div className={LAYOUT.gridContainer}>
                {/* Header as first row spanning all columns */}
                <div className={LAYOUT.headerRow}>
                    <h1 className={TEXT.myname}>{resumeData.personalInfo.name}</h1>
                    <p className={TEXT.mykeywords}>{resumeData.personalInfo.title}</p>
                    <Contact_oneLine contact={resumeData.contact} />
                </div>
                
                {/* Content columns */}
                <div className={LAYOUT.gridColLeft}>
                    <Profile profile={resumeData.profile} />
                    <WorkExperience workExperience={resumeData.workExperience} />
                </div>
                <div className={LAYOUT.gridColRight}>
                    <Education education={resumeData.education} />
                    <Achievements achievements={resumeData.achievements} />
                    <Skills skills={resumeData.skills} />
                </div>
              </div>
            </div>
        </div>
        
        {/* Second A4 Page */}
        <div id="cv-content-2" className={LAYOUT.container}>
            <div className={`${LAYOUT.page} page`}>
                <div className={LAYOUT.gridContainer}>
                    <div className={LAYOUT.gridColLeft}>
                        <Publications 
                            publications={resumeData.publications.slice(0, 8)} 
                        />
                    </div>
                    <div className={LAYOUT.gridColRight}> 
                      <References references={resumeData.references} />
                    </div>
                </div>
            </div>
        </div>
        
        {/* Third A4 Page */}
        <div id="cv-content-3" className={LAYOUT.container}>
            <div className={`${LAYOUT.page} page`}>
                <div className={LAYOUT.gridContainer}>
                    <div className={LAYOUT.gridColLeft}>
                        <Publications 
                            publications={resumeData.publications.slice(8)} 
                        />
                    </div>
                    <div className={LAYOUT.gridColRight}>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default App;