import React from 'react';
import { CONTACT_ONELINE, Icon } from '../styles/Styling.jsx';

// Reusable contact item component with icon and content for inline display
const ContactItem = ({ iconType, description }) => (
  <div className={CONTACT_ONELINE.contactItem}>
    <Icon type={iconType} className={CONTACT_ONELINE.contactIcon} />
    <span className={CONTACT_ONELINE.contactDescription}>{description}</span>
  </div>
);

const Contact_oneLine = ({ contact }) => {
  if (!contact || contact.length === 0) return null;
  // Group website links together
  const websites = contact.filter(item => item.iconType === "link");
  const otherContacts = contact.filter(item => item.iconType !== "link");
  
  return (
    <div className={CONTACT_ONELINE.contactContainer}>
      <div className={CONTACT_ONELINE.contactGrid}>
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
          <div className={CONTACT_ONELINE.websiteItem}>
            <Icon type="link" className={CONTACT_ONELINE.contactIcon} />
            <div className={CONTACT_ONELINE.websitesContainer}>
              {websites.map((site, index) => (
                <React.Fragment key={index}>
                  <a href={site.url} className={CONTACT_ONELINE.contactLink}>{site.label}</a>
                  {index < websites.length - 1 && <span className={CONTACT_ONELINE.contactLinkSeparator}></span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact_oneLine;
