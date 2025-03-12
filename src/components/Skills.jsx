import React from 'react';
import { useStyle } from '../styles/Styling_Context';

// Individual skill item
const SkillItem = ({ skill, styles }) => (
  <div className={styles.skillItem}>
    <span className="mr-2">•</span>
    <span>{skill}</span>
  </div>
);

const Skills = ({ skills, position }) => {
  if (!skills || skills.length === 0) return null;
  const styles = useStyle();
  const { SectionTitle, SKILLS } = styles;
  return (
    <div className={SKILLS.skillContainer}>
      <SectionTitle position={position}>Skills</SectionTitle>
      <div className={SKILLS.skillGrid}>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} styles={SKILLS}/>
        ))}
      </div>
    </div>
  );
};

export default Skills;
