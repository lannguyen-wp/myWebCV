import React from 'react';
import { useStyle } from '../styles/Styling_Context';

// Helper component for project items
const ProjectItem = ({ title, objective, responsibilities, tools, impact, styles }) => (
  <div className={styles.projecthighlightItem}>
    <h3 className={styles.projecthighlightTitle}>{title}</h3>
    
    {objective && (
      <div className={styles.projecthighlightObjective}>
        <span className="font-bold">Objective: </span>
        <span>{objective}</span>
      </div>
    )}
    
    {responsibilities && (
      <div className={styles.projecthighlightResponsibility}>
        <span className="font-bold">Responsibilities: </span>
        <span>{responsibilities}</span>
      </div>
    )}
    
    {tools && (
      <div className={styles.projecthighlightTools}>
        <span className="font-bold">Tools: </span>
        <span>{Array.isArray(tools) ? tools.join(', ') : tools}</span>
      </div>
    )}
    
    {impact && (
      <div className={styles.projecthighlightImpact}>
        <span className="font-bold">Impact: </span>
        <span>{impact}</span>
      </div>
    )}
  </div>
);

const ProjectHighlights = ({ projects, position, title }) => {
  if (!projects || projects.length === 0) return null; 
  const styles = useStyle();
  const { SectionTitle, PROJECTHIGHLIGHTS } = styles;
  return (
    <div className={PROJECTHIGHLIGHTS.projecthighlightContainer}>
      <SectionTitle position={position}>{title || 'Project Highlights'}</SectionTitle>
      <div className={PROJECTHIGHLIGHTS.projecthighlightGrid}>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            objective={project.objective}
            responsibilities={project.responsibilities}
            tools={project.tools}
            impact={project.impact}
            styles={PROJECTHIGHLIGHTS}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectHighlights;
