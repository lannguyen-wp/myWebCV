import React from 'react';
import { Icon } from '../styles/Styling_Global.jsx';
import { useStyle } from '../styles/Styling_Context';

// Individual work item component
const WorkItem = ({ title, company, location, years, responsibilities, styles }) => (
  <div className={styles.workItem}>
    <div className="flex justify-between items-baseline">
      <h3 className={styles.workTitle}>{title}</h3>
      <div className="flex items-center">
        <Icon type="calendar" className={styles.workIcon} />
        <span>{years}</span>
      </div>
    </div>
    <div className="flex justify-between items-baseline">
      <p className={styles.workCompany}>{company}</p>
      <div className="flex items-center">
        <Icon type="location" className={styles.workIcon} />
        <span>{location}</span>
      </div>
    </div>
    <ul className={styles.workList}>
      {responsibilities.map((responsibility, index) => (
        <li key={index} className={styles.workDescription}>
          {responsibility}
        </li>
      ))}
    </ul>
  </div>
);

const WorkExperience = ({ workExperience, position, title }) => {
  if (!workExperience || workExperience.length === 0) return null;
  const styles = useStyle();
  const { SectionTitle, WORK_EXPERIENCE } = styles;
  return (
    <div className={WORK_EXPERIENCE.workContainer}>
      <SectionTitle position={position}>{title || 'Professional Experience'}</SectionTitle>
      <div className={WORK_EXPERIENCE.workGrid}>
        {workExperience.map((item, index) => (
          <WorkItem 
            key={index}
            title={item.title}
            company={item.company}
            location={item.location}
            years={item.years}
            responsibilities={item.responsibilities}
            styles={WORK_EXPERIENCE}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
