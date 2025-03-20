import React, { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import Contact_oneLine from '../components/Contact_oneLine.jsx';
import Profile from '../components/Profile.jsx';
import WorkExperience from '../components/WorkExperience.jsx';
import Publications from '../components/Publications_noURL.jsx';
import Education from '../components/Education.jsx';
import Skills from '../components/Skills.jsx';
import References from '../components/References.jsx';
import Achievements from '../components/Achievements.jsx';  
import ProjectHighlights from '../components/ProjectHighlights.jsx';
import { LAYOUT } from '../styles/Styling_Private_2p_A4.jsx';
import { loadResumeData } from '../utils/dataLoader.jsx';

const PrivateCV_2p_A4_01 = () => {
  const [resumeData, setResumeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await loadResumeData();
        console.log('Data loaded:', data);
        setResumeData(data);
      } catch (err) {
        setError('Failed to load resume data');
        console.error('Error fetching resume data:', err);
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
                    <div className={LAYOUT.contentContainer}>
                        {/* Content columns */}
                        <div className={LAYOUT.gridColLt}>
                            <Profile profile={resumeData.profile} position="left"/>
                            <WorkExperience workExperience={resumeData.workExperience} position="left"/>
                        </div>
                        <div className={LAYOUT.gridColRt}>
                            <Education education={resumeData.education} position="right"/>
                            <Skills skills={resumeData.skills_gis} position="right"/>
                            <References references={resumeData.references.slice(0, 3)} position="right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Second A4 Page */}
        <div id="cv-content-1" className={LAYOUT.pageContainer}>
            <div className={`${LAYOUT.pageContainer_A4} page`}>
                <div className={LAYOUT.sectionContainer}>
                    <div className={LAYOUT.contentContainer}>
                        {/* Content columns */}
                        <div className={LAYOUT.gridColLt}>
                          <Publications publications={resumeData.publications} position="left" />
                        </div>
                        <div className={LAYOUT.gridColRt}>
                          <Achievements achievements={resumeData.achievements.slice(0, 2)} position="right" />
                          <ProjectHighlights projects={resumeData.projects} position="right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default PrivateCV_2p_A4_01;
