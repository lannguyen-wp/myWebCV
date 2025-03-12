import React from 'react';
import { Icon } from '../styles/Styling_Global.jsx';  // Change to named import
import { useStyle } from '../styles/Styling_Context';

// Individual publication item component
const PublicationItem = ({ title, journal, authors, year, link, styles }) => (
  <div className={styles.publicationItem}>
    <p className={styles.publicationTitle}>{title}</p>
    <p className={styles.publicationJournal}>{journal}</p>
    <p className={styles.publicationAuthors}>{authors}</p>
    <div className={styles.publicationFooter}>
      <div className={styles.publicationLink}>
        <Icon type="link" className={styles.publicationIcon} />
        <a href={link} className={styles.publicationLinkText}>{link}</a>
      </div>
      <div className={styles.publicationYear}>
        <Icon type="calendar" className={styles.publicationIcon} />
        <span>{year}</span>
      </div>
    </div>
  </div>
);

const Publications = ({ publications, position }) => {
  if (!publications || publications.length === 0) return null;
  const styles = useStyle();
  const { SectionTitle, PUBLICATIONS } = styles;
  return (
    <div className={PUBLICATIONS.publicationContainer}>
      <SectionTitle position={position}>Publications</SectionTitle>
      <div className={PUBLICATIONS.publicationGrid}>
        {publications.map((item, index) => (
          <PublicationItem 
            key={index}
            title={item.title}
            journal={item.journal}
            authors={item.authors}
            year={item.year}
            link={item.link}
            styles={PUBLICATIONS}
          />
        ))}
      </div>
    </div>
  );
};

export default Publications;
