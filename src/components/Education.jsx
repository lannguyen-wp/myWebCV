import React from 'react';
import { Icon } from '../styles/Styling_Global.jsx';
import { useStyle } from '../styles/Styling_Context';

// Individual education item component
const EducationItem = ({ degree, period, institution, location, years, styles }) => (
  <div className={styles.educationItem}>
    {/* 1. Degree - keep as is */}
    {Array.isArray(degree) ? (
      <div className={styles.educationDegreeContainer}>
        {degree.map((degreeItem, index) => (
          <h3 key={index} className={styles.educationDegree}>{degreeItem}</h3>
        ))}
      </div>
    ) : (
      <h3 className={styles.educationDegree}>{degree}</h3>
    )}
    {/* 2. Institution on its own line */}
    <p className={styles.educationInstitution}>{institution}</p>
    {/* 3. Time and Location on same line with icons */}
    <div className={styles.educationMetaRow}>
      {/* Time with icon */}
      <div className={styles.educationPeriod}>
        <Icon type="calendar" className={styles.educationIcon} />
        <span>{years || period}</span>
      </div>
      {/* Location with icon */}
      {location && (
        <div className={styles.educationLocation}>
          <Icon type="location" className={styles.educationIcon} />
          <span>{location}</span>
        </div>
      )}
    </div>
  </div>
);

const Education = ({ education, position, title }) => {
  if (!education || education.length === 0) return null;
  const styles = useStyle();
  const { SectionTitle, EDUCATION } = styles;
  return (
    <div className={EDUCATION.educationContainer}>
      <SectionTitle position={position}>{title || 'Education'}</SectionTitle>
      <div className={EDUCATION.educationGrid}>
        {education.map((item, index) => (
          <EducationItem 
            key={index}
            degree={item.degree}
            period={item.period}
            years={item.years}
            institution={item.institution}
            location={item.location}
            styles={EDUCATION}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
