import React from 'react';
import { Icon } from '../styles/Styling_Global.jsx';
import { useStyle } from '../styles/Styling_Context';

// Individual reference item component
const ReferenceItem = ({ name, position, institution, location, phone, email, styles }) => (
  <div className={styles.referenceItem}>
    <p className={styles.referenceName}>{name}</p>
    {position && <p className={styles.referencePosition}>{position}</p>}
    <p className={styles.referenceInstitution}>{institution}</p>
    {location && <p className={styles.referenceLocation}>{location}</p>}
    <div className={styles.referenceContact}>
      {phone && (
        <div className={styles.referencePhone}>
          <Icon type="phone" className={styles.referenceIcon} />
          <span>{phone}</span>
        </div>
      )}
      {email && (
        <div className={styles.referenceEmail}>
          <Icon type="email" className={styles.referenceIcon} />
          <a href={`mailto:${email}`} className={styles.referenceLink}>{email}</a>
        </div>
      )}
    </div>
  </div>
);

const References = ({ references, position }) => {
  if (!references || references.length === 0) return null;
  const styles = useStyle();
  const { SectionTitle, REFERENCES } = styles;
  return (
    <div className={REFERENCES.referenceContainer}>
      <SectionTitle position={position}>References</SectionTitle>
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
            styles={REFERENCES}
          />
        ))}
      </div>
    </div>
  );
};

export default References;
