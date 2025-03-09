import React from 'react';
import { SectionTitle } from '../styles/globalStyles.jsx';
import { SKILLS } from '../styles/componentStyles.jsx';

// Individual skill item
const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) return null;
  
  return (
    <div className={SKILLS.skillContainer}>
      <SectionTitle>Skills</SectionTitle>
      <ul className={SKILLS.skillList}>
        {skills.map((skill, index) => (
          <li key={index} className={SKILLS.skillDescription}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Skills;
