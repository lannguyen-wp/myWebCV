import React from 'react';
import { Icon } from '../styles/Styling_Global.jsx';
import { useStyle } from '../styles/Styling_Context.jsx';

// Individual education item component with 2-column layout
const EducationItem = ({ degree, period, institution, location, years, styles }) => (
  <div className={`${styles.educationItem}`}>
    {/* Left Column: Date with icon */}
    <div className={styles.educationYearColumn}>
      <div className={styles.educationPeriod}>
        <Icon type="calendar" className={styles.educationIcon} />
        <span>{years || period}</span>
      </div>
    </div>
    
    {/* Right Column: Degrees, Institution and Location all on the same line */}
    <div className={styles.educationContentColumn}>
      {/* All elements on same line with space-between justification */}
      <div className={styles.educationInlineRow}>
        {/* Degrees */}
        {Array.isArray(degree) ? (
          <span className={styles.educationDegree}>
            {degree.join(', ')}
          </span>
        ) : (
          <span className={styles.educationDegree}>{degree}</span>
        )}
        
        {/* Institution and location combined with comma */}
        <span className={styles.educationInstitutionLocation}>
          {institution}
          {location && `, ${location}`}
        </span>
      </div>
    </div>
  </div>
);

const Education = ({ education, position }) => {
  if (!education || education.length === 0) return null;
  const styles = useStyle();
  const { SectionTitle, EDUCATION } = styles;
  return (
    <div className={EDUCATION.educationContainer}>
      <SectionTitle position={position}>Education</SectionTitle>
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
