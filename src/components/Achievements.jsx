import React from 'react';
import { SectionTitle, Icon } from '../styles/globalStyles.jsx';
import { ACHIEVEMENTS } from '../styles/componentStyles.jsx';

// Individual achievement item with icon
const AchievementItem = ({ iconType, description }) => (
  <div className={ACHIEVEMENTS.achievementItem}>
    <Icon type={iconType} className={ACHIEVEMENTS.achievementIcon} />
    <span>{description}</span>
  </div>
);

const Achievements = ({ achievements }) => {
  if (!achievements || achievements.length === 0) return null;
  
  return (
    <div className={ACHIEVEMENTS.achievementContainer}>
      <SectionTitle>Achievements</SectionTitle>
      <div className={ACHIEVEMENTS.achievementGrid}>
        {achievements.map((item, index) => (
          <AchievementItem 
            key={index} 
            iconType={item.iconType} 
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
