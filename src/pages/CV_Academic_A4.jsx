import React, { useEffect, useState } from 'react';
import Header from '../components/Header_Academic.jsx';
import Contact_oneLine from '../components/Contact_oneLine_02.jsx';
// import Profile from '../components/Profile.jsx';
import WorkExperience from '../components/WorkExperience.jsx';
import Publications from '../components/Publications_02.jsx';
import Education from '../components/Education_1row.jsx';
import Skills from '../components/Skills_2col.jsx';
import References from '../components/References_1row.jsx';
import Achievements from '../components/Achievements.jsx';  
import ProfessionalServices from '../components/ProfessionalServices.jsx';
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
                        <Header personalInfo={resumeData.personalInfo} />
                        <Contact_oneLine contact={resumeData.contact} />
                    </div>
                    <div className={LAYOUT.contentContainer}>
                        {/* Single column content */}
                        <div className={LAYOUT.gridCol}>
                            <Education education={resumeData.education} />
                            <Publications publications={resumeData.publications} />
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
                            {/* Skills and Achievements in a 2-column grid */}
                            <div className="grid grid-cols-3 gap-6 w-full">
                                {/* Achievements take 1/3 of the width */}
                                <div className="col-span-1">
                                      <Achievements achievements={resumeData.achievements} />
                                </div>
                                {/* Skills take 2/3 of the width */}
                                <div className="col-span-2">
                                    <Skills skills={resumeData.skills} />
                                </div>
                            </div>
                            <WorkExperience workExperience={resumeData.workExperience} />
                            <ProfessionalServices services={resumeData.services} />
                            <References references={resumeData.references} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AcademicCV_A4;
