import React from 'react';
import { Icon } from '../styles/Styling_Global.jsx';  // Change to named import
import { useStyle } from '../styles/Styling_Context.jsx';

// Individual publication item component
const PublicationItem = ({ title, journal, authors, year, url, styles }) => (
  <div className={styles.publicationItem}>
    <p className={styles.publicationTitle}>{title}</p>
    <div className={styles.publicationFooter}>
      <p className={styles.publicationJournal}>
        {journal}
        {url && (
          <span className={styles.publicationUrl}> --- <a href={url} className={styles.publicationLinkText} target="_blank" rel="noopener noreferrer">{url}</a></span>
        )}
      </p>
      <div className={styles.publicationYear}>
        <Icon type="calendar" className={styles.publicationIcon} />
        <span>{year}</span>
      </div>
    </div>
    <p className={styles.publicationAuthors}>{authors}</p>
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
            url={item.link}
            styles={PUBLICATIONS}
          />
        ))}
      </div>
    </div>
  );
};

export default Publications;
