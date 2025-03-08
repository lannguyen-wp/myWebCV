import React from 'react';
import { SectionTitle } from '../styles/globalStyles.jsx';
import { SKILLS } from '../styles/componentStyles.jsx';

// Individual skill item
const SkillItem = ({ skill }) => (
  <div className={SKILLS.skillItem}>
    <span className="mr-2">•</span>
    <span>{skill}</span>
  </div>
);

const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) return null;
  
  return (
    <div className={SKILLS.skillContainer}>
      <SectionTitle>Skills</SectionTitle>
      <div className={SKILLS.skillGrid}>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
