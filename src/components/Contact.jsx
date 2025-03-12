import React from 'react';
import { Icon } from '../styles/Styling_Global.jsx';
import { useStyle } from '../styles/Styling_Context';

// Reusable contact item component with icon and content
const ContactItem = ({ iconType, description, styles }) => (
  <div className={styles.contactItem}>
    <Icon type={iconType} className={styles.contactIcon} />
    {iconType === 'email' ? (
      <a href={`mailto:${description}`} className={styles.contactLink}>{description}</a>
    ) : (
      <span className={styles.contactDescription}>{description}</span>
    )}
  </div>
);

const Contact = ({ contact, position }) => {
  if (!contact || contact.length === 0) return null;
  // Group website links together
  const websites = contact.filter(item => item.iconType === "link");
  const otherContacts = contact.filter(item => item.iconType !== "link");
  const styles = useStyle();
  const { SectionTitle, CONTACT } = styles;
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
            styles={CONTACT}
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
