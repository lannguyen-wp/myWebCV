import React from 'react';
import { SectionTitle, Icon } from '../styles/globalStyles.jsx';
import { EDUCATION } from '../styles/componentStyles.jsx';

// Individual education item component
const EducationItem = ({ degree, period, institution, location, years }) => (
  <div className={EDUCATION.educationItem}>
    <h3 className={EDUCATION.educationDegree}>{degree}</h3>
    <div className={EDUCATION.educationPeriod}>
      <Icon type="calendar" className={EDUCATION.educationIcon} />
      <span>{years || period}</span>
    </div>
    <p>{institution} {location ? `, ${location}` : ''}</p>
  </div>
);

const Education = ({ education }) => {
  if (!education || education.length === 0) return null;
  
  return (
    <div className={EDUCATION.educationContainer}>
      <SectionTitle>Education</SectionTitle>
      <div className={EDUCATION.educationGrid}>
        {education.map((item, index) => (
          <EducationItem 
            key={index}
            degree={item.degree}
            period={item.period}
            years={item.years}
            institution={item.institution}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
