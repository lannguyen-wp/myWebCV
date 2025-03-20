import React from 'react';
import { useStyle } from '../styles/Styling_Context';

const Skills = ({ skills, position }) => {
  if (!skills || skills.length === 0) return null;
  
  const styles = useStyle();
  const { SectionTitle, SKILLS } = styles;
  
  return (
    <div className={SKILLS.skillContainer}>
      <SectionTitle position={position}>Skills</SectionTitle>
      {/* Simple list with CSS Grid for 2 columns */}
      <ul className={SKILLS.skillList}>
        {skills.map((skill, index) => (
          <li key={index} className={SKILLS.skillItem}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
