import React from 'react';
import { Icon } from '../styles/Styling_Global.jsx';
import { useStyle } from '../styles/Styling_Context';

// Individual achievement item with icon
const AchievementItem = ({ iconType, description, styles }) => (
  <div className={styles.achievementItem}>
    <Icon type={iconType} className={styles.achievementIcon} />
    <span className={styles.achievementDescription}>{description}</span>
  </div>
);

const Achievements = ({ achievements, position }) => {
  if (!achievements || achievements.length === 0) return null;
  const styles = useStyle();
  const { SectionTitle, ACHIEVEMENTS } = styles;
  return (
    <div className={ACHIEVEMENTS.achievementContainer}>
      <SectionTitle position={position}>Achievements</SectionTitle>
      <div className={ACHIEVEMENTS.achievementGrid}>
        {achievements.map((item, index) => (
          <AchievementItem 
            key={index} 
            iconType={item.iconType} 
            description={item.description}
            styles={ACHIEVEMENTS}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
