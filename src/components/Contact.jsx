import React from 'react';
import { SectionTitle, Icon } from '../styles/globalStyles.jsx';
import { CONTACT } from '../styles/componentStyles.jsx';

// Reusable contact item component with icon and content
const ContactItem = ({ iconType, description }) => (
  <div className={CONTACT.contactItem}>
    <Icon type={iconType} className={CONTACT.contactIcon} />
    <span className={CONTACT.contactDescription}>{description}</span>
  </div>
);

const Contact = ({ contact }) => {
  if (!contact || contact.length === 0) return null;
  
  // Group website links together
  const websites = contact.filter(item => item.iconType === "link");
  const otherContacts = contact.filter(item => item.iconType !== "link");
  
  return (
    <div className={CONTACT.contactContainer}>
      <SectionTitle>Contact</SectionTitle>
      <div className={CONTACT.contactGrid}>
        {/* Display regular contact items */}
        {otherContacts.map((item, index) => (
          <ContactItem 
            key={index}
            iconType={item.iconType}
            description={item.description}
          />
        ))}
        
        {/* Display website links if any */}
        {websites.length > 0 && (
          <div className={CONTACT.contactItem}>
            <Icon type="link" className={CONTACT.contactIcon} />
            <div>
              {websites.map((site, index) => (
                <React.Fragment key={index}>
                  <a href={site.url} className={CONTACT.contactLink}>{site.label}</a>
                  {index < websites.length - 1 && <span className={CONTACT.contactLinkSeparator}></span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
