import React, { useEffect, useState } from 'react';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Skills from './components/Skills.jsx';
import References from './components/References.jsx';
import Profile from './components/Profile.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import Publications from './components/Publications.jsx';
import { LAYOUT, TEXT } from './styles/globalStyles.jsx';

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
        <div id="cv-content" className={LAYOUT.container}>

            {/* First-row: two column layout  */}
            <div className={LAYOUT.flexRow}>
                <div className={LAYOUT.container_c1}>
                </div>
                <div className={LAYOUT.container_c2r1}>
                    <h1 className={TEXT.myname}>{resumeData.personalInfo.name}</h1>
                    <p className={TEXT.mykeywords}>{resumeData.personalInfo.title}</p>
                </div>
            </div>

            {/* Second row: two column layout  */}
            <div className={LAYOUT.flexRow}>
                <div className={LAYOUT.container_c1}>
                    <Contact contact={resumeData.contact} />
                    <Education education={resumeData.education} />
                    <Achievements achievements={resumeData.achievements} />
                    <Skills skills={resumeData.skills} />
                    <References references={resumeData.references} />
                </div>
                <div className={LAYOUT.container_c2r2}>
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