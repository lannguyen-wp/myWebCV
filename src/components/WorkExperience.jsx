import React from 'react';
import { SectionTitle, Icon } from '../styles/globalStyles.jsx';
import { WORK_EXPERIENCE } from '../styles/componentStyles.jsx';

// Individual work item component
const WorkItem = ({ title, company, location, years, responsibilities }) => (
  <div className={WORK_EXPERIENCE.workItem}>
    <div className="flex justify-between items-baseline">
      <h3 className={WORK_EXPERIENCE.workTitle}>{title}</h3>
      <div className="flex items-center">
        <Icon type="calendar" className={WORK_EXPERIENCE.workIcon} />
        <span>{years}</span>
      </div>
    </div>
    <div className="flex justify-between items-baseline">
      <p className={WORK_EXPERIENCE.workCompany}>{company}</p>
      <div className="flex items-center">
        <Icon type="location" className={WORK_EXPERIENCE.workIcon} />
        <span>{location}</span>
      </div>
    </div>
    <ul className={WORK_EXPERIENCE.workList}>
      {responsibilities.map((responsibility, index) => (
        <li key={index} className={WORK_EXPERIENCE.workDescription}>
          {responsibility}
        </li>
      ))}
    </ul>
  </div>
);

const WorkExperience = ({ workExperience }) => {
  if (!workExperience || workExperience.length === 0) return null;
  
  return (
    <div className={WORK_EXPERIENCE.workContainer}>
      <SectionTitle position="right">Work Experience</SectionTitle>
      <div className={WORK_EXPERIENCE.workGrid}>
        {workExperience.map((item, index) => (
          <WorkItem 
            key={index}
            title={item.title}
            company={item.company}
            location={item.location}
            years={item.years}
            responsibilities={item.responsibilities}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
