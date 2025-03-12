import React, { useEffect, useState } from 'react';
import Contact_oneLine from '../components/Contact_oneLine.jsx';
import Education from '../components/Education.jsx';
import Achievements from '../components/Achievements.jsx';
import Skills from '../components/Skills.jsx';
import References from '../components/References.jsx';
import Profile from '../components/Profile.jsx';
import WorkExperience from '../components/WorkExperience.jsx';
import Publications from '../components/Publications_noURL.jsx';
import Header from '../components/Header.jsx';
import { LAYOUT } from '../styles/Styling_A4_01.jsx';

const FullCV_A4_01 = () => {
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
    <div id="cv" className={LAYOUT.mainContainer}>
        {/* First A4 Page */}
        <div id="cv-content-1" className={LAYOUT.pageContainer}>
            <div className={`${LAYOUT.pageContainer_A4} page`}>
              <div className={LAYOUT.sectionContainer}>
                {/* Header as first row spanning all columns */}
                <div className={LAYOUT.headerRow}>
                    <Header personalInfo={resumeData.personalInfo} />
                    <Contact_oneLine contact={resumeData.contact} />
                </div>
                {/* Content columns */}
                <div className={LAYOUT.gridColLt}>
                    <Profile profile={resumeData.profile} position="left"/>
                    <WorkExperience workExperience={resumeData.workExperience} position="left"/>
                    
                </div>
                <div className={LAYOUT.gridColRt}>
                    <Education education={resumeData.education} position="right"/>
                    <Achievements achievements={resumeData.achievements} position="right"/>
                    <Skills skills={resumeData.skills} position="right"/>
                    
                </div>
              </div>
            </div>
        </div> 
        <div id="cv-content-2" className={LAYOUT.pageContainer}>
            <div className={`${LAYOUT.pageContainer_A4} page`}>
                <div className={LAYOUT.sectionContainer}>
                    <div className={LAYOUT.gridColLt}>
                        <Publications 
                            publications={resumeData.publications} position="left"
                        />
                    </div>
                    <div className={LAYOUT.gridColRt}> 
                      <References references={resumeData.references} position="right"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FullCV_A4_01;