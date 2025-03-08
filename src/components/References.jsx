import React from 'react';
import { SectionTitle, Icon } from '../styles/globalStyles.jsx';
import { REFERENCES } from '../styles/componentStyles.jsx';

// Individual reference item component
const ReferenceItem = ({ name, title, position, institution, location, phone, email }) => (
  <div>
    <p className={REFERENCES.referenceName}>{name}</p>
    {position && <p className={REFERENCES.referencePosition}>{position}</p>}
    <p className={REFERENCES.referenceInstitution}>{institution}</p>
    {location && <p className={REFERENCES.referenceLocation}>{location}</p>}
    
    <div className={REFERENCES.referenceContact}>
      {phone && (
        <div className={REFERENCES.referencePhone}>
          <Icon type="phone" className={REFERENCES.referenceIcon} />
          <span>{phone}</span>
        </div>
      )}
      {email && (
        <div className={REFERENCES.referenceEmail}>
          <Icon type="email" className={REFERENCES.referenceIcon} />
          <a href={`mailto:${email}`} className={REFERENCES.referenceLink}>{email}</a>
        </div>
      )}
    </div>
  </div>
);

const References = ({ references }) => {
  if (!references || references.length === 0) return null;
  
  return (
    <div className={REFERENCES.referenceContainer}>
      <SectionTitle>References</SectionTitle>
      <div className={REFERENCES.referenceGrid}>
        {references.map((item, index) => (
          <ReferenceItem 
            key={index}
            name={item.name}
            position={item.position}
            institution={item.institution}
            location={item.location}
            phone={item.phone}
            email={item.email}
          />
        ))}
      </div>
    </div>
  );
};

export default References;
