import React, { useEffect, useState } from 'react';
import Contact from '../components/Contact.jsx';
import Education from '../components/Education.jsx';
import Achievements from '../components/Achievements.jsx';
import Skills from '../components/Skills.jsx';
import ProjectHighlights from '../components/ProjectHighlights.jsx';
import References from '../components/References.jsx';
import Profile from '../components/Profile.jsx';
import WorkExperience from '../components/WorkExperience.jsx';
import Publications from '../components/Publications.jsx';
import Header from '../components/Header.jsx';
import { LAYOUT } from '../styles/Styling_Web.jsx';

const Home = () => {
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
    <div className={LAYOUT.mainContainer}>
        <div id="cv-content" className={LAYOUT.pageContainer_Web}>
            {/* Using grid layout with classes from globalStyles */}
            <div className={LAYOUT.sectionContainer}>
                {/* First row: two column layout */}
                <div className={LAYOUT.gridColLt}>
                </div>
                <div className={LAYOUT.gridColRtHd}>
                    <Header personalInfo={resumeData.personalInfo} />
                </div>
                
                {/* Second row: two column layout */}
                <div className={LAYOUT.gridColLt}>
                    <Contact contact={resumeData.contact} position="left" />
                    <Education education={resumeData.education} position="left" />
                    <Achievements achievements={resumeData.achievements} position="left" />
                    <Skills skills={resumeData.skills} position="left" />
                    <ProjectHighlights projects={resumeData.projects} position="left" />
                    <References references={resumeData.references.slice(0, 3)} position="left" />
                </div>
                <div className={LAYOUT.gridColRt}>
                    <Profile profile={resumeData.profile} position="right" />
                    <WorkExperience workExperience={resumeData.workExperience} position="right" />
                    <Publications publications={resumeData.publications} position="right" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;