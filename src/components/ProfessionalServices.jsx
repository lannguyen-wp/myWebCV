import React from 'react';
import { useStyle } from '../styles/Styling_Context';

const ProfessionalServices = ({ services, position }) => {
  if (!services || services.length === 0) return null;
  
  const styles = useStyle();
  const { SectionTitle, SERVICES } = styles;
  
  return (
    <div className={SERVICES.serviceContainer}>
      <SectionTitle position={position}>Professional Services</SectionTitle>
      
      <div className={SERVICES.serviceList}>
        {services.map((serviceGroup, index) => (
          <React.Fragment key={index}>
            {Object.keys(serviceGroup).map(serviceKey => {
              const service = serviceGroup[serviceKey];
              return (
                <div key={serviceKey} className={SERVICES.serviceGrid}>
                  {/* Left column: Title */}
                  <div className={SERVICES.serviceTitleColumn}>
                    <h3 className={SERVICES.serviceTitle}>{service.title}</h3>
                  </div>
                  
                  {/* Right column: Description */}
                  <div className={SERVICES.serviceDescriptionColumn}>
                    <p className={SERVICES.serviceDescription}>{service.description}</p>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalServices;
