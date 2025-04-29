import React from 'react';
import { useStyle } from '../styles/Styling_Context.jsx';
import { Icon } from '../styles/Styling_Global.jsx';

const References = ({ references, position, title }) => {
  if (!references || references.length === 0) return null;
  
  const styles = useStyle();
  const { SectionTitle, REFERENCES } = styles;
  
  return (
    <div className={REFERENCES.referenceContainer}>
      <SectionTitle position={position}>{title || 'References'}</SectionTitle>
      <div className={REFERENCES.referenceGrid}>
        {references.map((reference, index) => (
          <div key={index} className={REFERENCES.referenceItem}>
            <h3 className={REFERENCES.referenceName}>{reference.name}</h3>
            <p className={REFERENCES.referencePosition}>{reference.position}</p>
            <p className={REFERENCES.referenceInstitution}>{reference.institution}</p>             
            <p className={REFERENCES.referenceLocation}>{reference.location}</p>
            <div className={REFERENCES.referenceContact}>
            <div className={REFERENCES.referenceEmail}>
                <Icon type="email" className={REFERENCES.referenceIcon} />
                  <a href={`mailto:${reference.email}`} className={REFERENCES.referenceLink}>
                    {reference.email}
                  </a>
            </div>
              <div className={REFERENCES.referencePhone}>
                <Icon type="phone" className={REFERENCES.referenceIcon} />
                <span>{reference.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
