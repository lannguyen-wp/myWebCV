import React from 'react';
import { SectionTitle, Icon } from '../styles/globalStyles.jsx';
import { PUBLICATIONS } from '../styles/componentStyles.jsx';

// Individual publication item component
const PublicationItem = ({ title, journal, authors, year, link }) => (
  <div className={PUBLICATIONS.publicationItem}>
    <p className={PUBLICATIONS.publicationTitle}>{title}</p>
    <p className={PUBLICATIONS.publicationJournal}>{journal}</p>
    <p className={PUBLICATIONS.publicationAuthors}>{authors}</p>
    <div className={PUBLICATIONS.publicationFooter}>
      <div className={PUBLICATIONS.publicationLink}>
        <Icon type="link" className={PUBLICATIONS.publicationIcon} />
        <a href={link} className={PUBLICATIONS.publicationLinkText}>{link}</a>
      </div>
      <div className={PUBLICATIONS.publicationYear}>
        <Icon type="calendar" className={PUBLICATIONS.publicationIcon} />
        <span>{year}</span>
      </div>
    </div>
  </div>
);

const Publications = ({ publications }) => {
  if (!publications || publications.length === 0) return null;
  
  return (
    <div className={PUBLICATIONS.publicationContainer}>
      <SectionTitle position="right">Publications</SectionTitle>
      <div className={PUBLICATIONS.publicationGrid}>
        {publications.map((item, index) => (
          <PublicationItem 
            key={index}
            title={item.title}
            journal={item.journal}
            authors={item.authors}
            year={item.year}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Publications;
