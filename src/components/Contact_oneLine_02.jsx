import React from 'react';
import { Icon } from '../styles/Styling_Global.jsx';
import { useStyle } from '../styles/Styling_Context';

// Reusable contact item component with icon and content
const ContactItem = ({ iconType, description, url, styles }) => {
  // Check if this is a LinkedIn URL and override the icon type
  const isLinkedIn = url && url.includes("linkedin.com");
  const displayIconType = isLinkedIn ? "linkedin" : iconType;
  
  return (
    <div className={styles.contactItem}>
      <Icon type={displayIconType} className={styles.contactIcon} />
      {iconType === 'email' ? (
        <a href={`mailto:${description}`} className={styles.contactLink}>{description}</a>
      ) : url ? (
        <a 
          href={url} 
          className={styles.contactLink}
          target="_blank" 
          rel="noopener noreferrer"
        >
          {isLinkedIn ? url.replace("https://", "") : description}
        </a>
      ) : (
        <span className={styles.contactDescription}>{description}</span>
      )}
    </div>
  );
};

const Contact_oneLine = ({ contact }) => {
  if (!contact || contact.length === 0) return null;
  
  const styles = useStyle();
  const { CONTACT } = styles;
  
  // Filter the contact items to include:
  // 1. All non-link items
  // 2. Only the first link item (which should be LinkedIn)
  const linkItems = contact.filter(item => item.iconType === 'link');
  const firstLinkItem = linkItems.length > 0 ? [linkItems[0]] : [];
  const nonLinkItems = contact.filter(item => item.iconType !== 'link');
  
  // Combine the filtered items
  const filteredContacts = [...nonLinkItems, ...firstLinkItem];
  
  return (
    <div className={CONTACT.contactContainer}>
      <div className={CONTACT.contactGrid}>
        {/* Display filtered contact items */}
        {filteredContacts.map((item, index) => (
          <ContactItem 
            key={index}
            iconType={item.iconType}
            description={item.description}
            url={item.url}
            styles={CONTACT}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact_oneLine;
