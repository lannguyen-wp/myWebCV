import React from 'react';

// Icons used throughout the application
export const ICONS = {
  phone: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
  ),
  email: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  ),
  location: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </>
  ),
  link: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
  ),
  calendar: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
  ),
  document: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
  ),
  award: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
  ),
  bullet: (
    <span className="mr-2">•</span>
  )
};

// Reusable Icon component
export const Icon = ({ type, className }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {ICONS[type]}
  </svg>
);

// Utility function to combine multiple Tailwind classes into a single string
export const combineStyles = (...styles) => {
  return styles.filter(Boolean).join(' ');
};

// Base styles that are extended by other styles
export const baseStyles = {
  layout: {
    gridColLeft: "col-span-1 flex flex-col pr-2 pl-4",
    gridColRight: "col-span-2 flex flex-col pr-4 pl-2",
    align_fs: "flex items-start",
    align_fc: "flex items-center",
  },
  text: {
    heading1: "text-6xl font-bold",
    heading2: "text-4xl font-bold",
    heading3: "text-2xl font-bold",
    heading4: "text-xl font-bold",
    heading5: "text-lg font-bold",
    textBase: "text-base",
    textURL: "underline hover:text-blue-500",
  }
};

// Layout styles
export const LAYOUT = {
    // Main container styles
    pageContainer: "flex justify-center bg-gray-200 py-4",
    container: "w-[1200px] bg-white overflow-hidden",
    // Grid layout styles for consistent column widths
    gridContainer: "grid grid-cols-3",
    gridItem: "grid grid-col gap-2",
    gridColLeft: combineStyles(baseStyles.layout.gridColLeft, "bg-[#61584F] items-center"),
    gridColRightHeader: combineStyles(baseStyles.layout.gridColRight, "bg-[#F3F4F6] items-center"),
    gridColRightContent: combineStyles(baseStyles.layout.gridColRight, "bg-white items-start"),
    // Section styles
    sectionContainer_left: combineStyles(baseStyles.text.textBase, "text-white w-full mt-4"),
    sectionContainer_right: combineStyles(baseStyles.text.textBase, "text-[#011962] w-full mt-4"),
    // Item styles
    iconStyle: "w-4 h-4 mr-2 flex-shrink-0",
    listStyle: "list-disc pl-5 mt-1",
};

// Text styles
const sectionTitle = combineStyles(baseStyles.text.heading2, "border-b-4 pb-2 mb-2 w-full");
export const TEXT = {
  myname: combineStyles(baseStyles.text.heading2, "text-[#011962]"),
  mykeywords: combineStyles(baseStyles.text.heading4, "text-blue-500 mt-2 mb-2"),
  sectionTitle_left: combineStyles(sectionTitle, "text-white"),
  sectionTitle_right: combineStyles(sectionTitle, "border-[#011962] text-[#011962]"),
};

// Hyperlink style
const hyperlink = combineStyles(baseStyles.text.textURL, "");

// Component-specific styles
export const COMPONENT_STYLES = {
  // Contact component styles
  CONTACT: {
    contactContainer: LAYOUT.sectionContainer_left,
    contactGrid: LAYOUT.gridItem,
    contactItem: baseStyles.layout.align_fc,
    contactIcon: LAYOUT.iconStyle,
    contactDescription: "",
    contactLink: hyperlink,
    contactLinkSeparator: "mr-2",
  },

  // Education component styles
  EDUCATION: {
    educationContainer: LAYOUT.sectionContainer_left,
    educationGrid: LAYOUT.gridItem,
    educationItem: "",
    educationDegree: baseStyles.text.heading5,
    educationPeriod: baseStyles.layout.align_fc,
    educationIcon: LAYOUT.iconStyle,
  },

  // Achievements component styles
  ACHIEVEMENTS: {
    achievementContainer: LAYOUT.sectionContainer_left,
    achievementGrid: LAYOUT.gridItem,
    achievementItem: baseStyles.layout.align_fc,
    achievementIcon: LAYOUT.iconStyle,
    achievementDescription: "",
  },

  // Skills component styles
  SKILLS: {
    skillContainer: LAYOUT.sectionContainer_left,
    skillList: LAYOUT.listStyle,
    skillDescription: "",
  },

  // References component styles
  REFERENCES: {
    referenceContainer: LAYOUT.sectionContainer_left,
    referenceGrid: LAYOUT.gridItem,
    referenceName: baseStyles.text.heading5,
    referenceTitle: "italic",
    referenceInstitution: "",
    referenceLocation: "",
    referenceContact: "",
    referencePhone: baseStyles.layout.align_fc,
    referenceEmail: baseStyles.layout.align_fc,
    referenceIcon: LAYOUT.iconStyle,
    referenceLink: hyperlink,
  },

  // Profile component styles
  PROFILE: {
    profileContainer: LAYOUT.sectionContainer_right,
    profileText: "",
  },

  // Work Experience component styles
  WORK_EXPERIENCE: {
    workContainer: LAYOUT.sectionContainer_right,
    workGrid: LAYOUT.gridItem,
    workItem: "",
    workTitle: baseStyles.text.heading5,
    workIcon: LAYOUT.iconStyle,
    workCompany: "italic",
    workList: LAYOUT.listStyle,
    workDescription: "",
  },

  // Publications component styles
  PUBLICATIONS: {
    publicationContainer: LAYOUT.sectionContainer_right,
    publicationGrid: LAYOUT.gridItem,
    publicationItem: "mb-0 pb-2 border-b border-dashed border-gray-300 w-full",
    publicationTitle: baseStyles.text.heading5,
    publicationJournal: "text-orange-500 font-bold",
    publicationAuthors: "italic",
    publicationFooter: combineStyles(baseStyles.layout.align_fc, "justify-between"),
    publicationLink: baseStyles.layout.align_fc,
    publicationLinkText: hyperlink,
    publicationYear: baseStyles.layout.align_fc,
    publicationIcon: LAYOUT.iconStyle,
  },
};

// Destructure component styles for direct import
export const {
  CONTACT,
  EDUCATION,
  ACHIEVEMENTS,
  SKILLS,
  REFERENCES,
  PROFILE,
  WORK_EXPERIENCE,
  PUBLICATIONS
} = COMPONENT_STYLES;

// Common UI elements used across components
export const SectionTitle = ({ children, position = "left" }) => (
  <h2 className={position === "left" ? TEXT.sectionTitle_left : TEXT.sectionTitle_right}>
    {children}
  </h2>
);

// Export everything together
const Styling = {
  // Base utilities
  combineStyles,
  baseStyles,
  
  // Layout and text
  LAYOUT,
  TEXT,
  
  // Icons
  ICONS,
  Icon,
  
  // Component styles
  COMPONENT_STYLES,
  CONTACT,
  EDUCATION,
  ACHIEVEMENTS,
  SKILLS,
  REFERENCES,
  PROFILE,
  WORK_EXPERIENCE,
  PUBLICATIONS,
  
  // UI elements
  SectionTitle,
};

export default Styling;