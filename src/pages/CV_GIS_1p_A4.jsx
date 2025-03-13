import React, { useEffect, useState } from 'react';
import Contact_oneLine from '../components/Contact_oneLine.jsx';
import Education from '../components/Education.jsx';
import ProjectHighlights from '../components/ProjectHighlights.jsx';
import Skills from '../components/Skills.jsx';
import Profile from '../components/Profile.jsx';
import WorkExperience from '../components/WorkExperience.jsx';
import Header from '../components/Header.jsx';
import { LAYOUT } from '../styles/Styling_GIS_1p_A4.jsx';
import { loadResumeData } from '../utils/dataLoader.js';

const GisCV_1page_A4_01 = () => {
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
        {/* Single A4 Page */}
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
                            <ProjectHighlights 
                            projects={resumeData.projects.filter((_, index) => index === 0 || index === 3)} 
                            position="right"
                            />
                            <Skills skills={resumeData.skills_gis} position="right"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default GisCV_1page_A4_01;
