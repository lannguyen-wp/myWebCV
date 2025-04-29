import React, { useEffect, useState } from 'react';
import Header from '../components/Header_Academic.jsx';
import Contact_oneLine from '../components/Contact_oneLine_02.jsx';
import Profile from '../components/Profile.jsx';
import WorkExperience from '../components/WorkExperience.jsx';
import Education from '../components/Education_1row.jsx';
import Skills from '../components/Skills_2col.jsx';
import { LAYOUT } from '../styles/Styling_Academic_A4.jsx';
import { loadResumeData } from '../utils/dataLoader.jsx';

const AcademicCV_A4 = () => {
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
                    {/* Header as first row spanning full width */}
                    <div className={LAYOUT.headerRow}>
                        {/* <Profile profile={resumeData.profile} /> */}
                        <Header personalInfo={resumeData.qat_personalInfo} />
                        <Contact_oneLine contact={resumeData.qat_contact} />
                        
                    </div>
                    <div className={LAYOUT.contentContainer}>
                        {/* Single column content */}
                        <div className={LAYOUT.gridCol}>
                            <Profile profile={resumeData.qat_profile} title='Summary' />
                            <WorkExperience workExperience={resumeData.qat_workExperience.slice(0, 4)} />
                                   
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Second A4 Page */}
        <div id="cv-content-2" className={LAYOUT.pageContainer}>
            <div className={`${LAYOUT.pageContainer_A4} page`}>
                <div className={LAYOUT.sectionContainer}>
                    <div className={LAYOUT.contentContainer}>
                        {/* Single column content */}
                        <div className={LAYOUT.gridCol}>
                            <WorkExperience workExperience={resumeData.qat_workExperience.slice(4, )} />
                            <Education education={resumeData.qat_education} />
                            <Skills skills={resumeData.qat_skills} />  
                            <WorkExperience workExperience={resumeData.qat_extraExperience} title='Internships' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AcademicCV_A4;
