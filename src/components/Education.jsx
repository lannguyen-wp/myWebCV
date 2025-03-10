import React from 'react';
import { SectionTitle, EDUCATION, Icon } from '../styles/Styling.jsx';

// Individual education item component
const EducationItem = ({ degree, period, institution, location, years }) => (
  <div className={EDUCATION.educationItem}>
    {/* Handle both string and array degrees */}
    {Array.isArray(degree) ? (
      <div className={EDUCATION.educationDegreeContainer}>
        {degree.map((degreeItem, index) => (
          <h3 key={index} className={EDUCATION.educationDegree}>{degreeItem}</h3>
        ))}
      </div>
    ) : (
      <h3 className={EDUCATION.educationDegree}>{degree}</h3>
    )}
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
