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
    gridColRight: "col-span-1 flex flex-col pr-4 pl-2",
    gridColLeft: "col-span-2 flex flex-col pr-2 pl-4",
    align_fs: "flex items-start",
    align_fc: "flex items-center",
  },
  text: {
    heading1: "text-6xl font-bold",
    heading2: "text-4xl font-bold",
    heading3: "text-2xl font-bold",
    heading4: "text-xl font-bold",
    heading5: "text-base font-bold",
    textBase: "text-sm",
    textURL: "underline hover:text-blue-500",
  }
};

// Layout styles
export const LAYOUT = {
  // Main container styles
  container: "flex flex-col items-center py-4", // Container for all pages
  pageContainer: "flex flex-col items-center justify-center bg-gray-200 p-4",
  
  
  // A4 page style with adjusted dimensions to prevent print overflow
  page: "w-[210mm] h-[297mm] bg-white shadow-lg border border-red-500", // Slightly reduced from A4 dimensions
  
  // Grid layout styles for consistent column widths
  gridContainer: "grid grid-cols-3 h-full py-8 px-4", // Added row template
  // Full width header row
  headerRow: "col-span-3 flex flex-col bg-[#F3F4F6] pl-4 justify-center",
  // Renamed to match actual positions - Right column is dark colored
  gridColRight: combineStyles(baseStyles.layout.gridColRight, "bg-[#61584F] items-center"),
  gridColLeft: combineStyles(baseStyles.layout.gridColLeft, "bg-white items-start"),
  // Section styles
  sectionContainer_right: combineStyles(baseStyles.text.textBase, "text-white w-full mt-0"),
  sectionContainer_left: combineStyles(baseStyles.text.textBase, "text-[#011962] w-full mt-0"),
  // Item styles
  iconStyle: "w-4 h-4 mr-1 flex-shrink-0",
  listStyle: "list-disc pl-5 mt-1",
};

// Text styles
const sectionTitle = combineStyles(baseStyles.text.heading3, "border-b-2 w-full");
export const TEXT = {
  myname: combineStyles(baseStyles.text.heading2, "text-[#011962]"),
  mykeywords: combineStyles(baseStyles.text.heading4, "text-blue-500 mt-2 mb-2"),
  sectionTitle_right: combineStyles(sectionTitle, "text-white"),
  sectionTitle_left: combineStyles(sectionTitle, "border-[#011962] text-[#011962]"),
};

// Hyperlink style
const hyperlink = combineStyles(baseStyles.text.textURL, "");

// Component-specific styles
export const COMPONENT_STYLES = {
  // Contact component styles
  CONTACT: {
    contactContainer: combineStyles(LAYOUT.sectionContainer_right, ""),
    contactGrid: combineStyles(LAYOUT.gridItem, ""),
    contactItem: combineStyles(baseStyles.layout.align_fc, ""),
    contactIcon: combineStyles(LAYOUT.iconStyle, ""),
    contactDescription: combineStyles(""),
    contactLink: combineStyles(hyperlink, ""),
    contactLinkSeparator: combineStyles("mr-2"),
  },

  // Contact_oneLine component styles
  CONTACT_ONELINE: {
    contactContainer: combineStyles("mt-0 mb-2 text-[#011962] text-sm"),
    contactGrid: combineStyles("flex flex-wrap items-center"),
    contactItem: combineStyles("inline-flex items-center mr-4"),
    websiteItem: combineStyles("inline-flex items-center mr-4"),
    websitesContainer: combineStyles("flex"),
    contactLinkSeparator: combineStyles("mr-2"),
    contactIcon: combineStyles(LAYOUT.iconStyle, ""),
    contactDescription: combineStyles(""),
    contactLink: combineStyles(hyperlink, ""),
  },

  // Education component styles
  EDUCATION: {
    educationContainer: combineStyles(LAYOUT.sectionContainer_right, ""),
    educationGrid: combineStyles(LAYOUT.gridItem, "pt-1"),
    educationItem: combineStyles(""),
    educationDegree: combineStyles(baseStyles.text.heading5, ""),
    educationDegreeContainer: combineStyles("mb-1"), 
    educationPeriod: combineStyles(baseStyles.layout.align_fc, ""),
    educationIcon: combineStyles(LAYOUT.iconStyle, ""),
  },

  // Achievements component styles
  ACHIEVEMENTS: {
    achievementContainer: combineStyles(LAYOUT.sectionContainer_right, ""),
    achievementGrid: combineStyles(LAYOUT.gridItem, "pt-1"),
    achievementItem: combineStyles(baseStyles.layout.align_fc, ""),
    achievementIcon: combineStyles(LAYOUT.iconStyle, ""),
    achievementDescription: combineStyles("", ""),
  },

  // Skills component styles
  SKILLS: {
    skillContainer: combineStyles(LAYOUT.sectionContainer_right, ""),
    skillGrid: combineStyles(LAYOUT.gridItem, "pt-1"),
    skillList: combineStyles(LAYOUT.listStyle, ""),
    skillDescription: combineStyles(""),
  },

  // References component styles
  REFERENCES: {
    referenceContainer: combineStyles(LAYOUT.sectionContainer_right, ""),
    referenceGrid: combineStyles(LAYOUT.gridItem, ""),
    referenceItem: combineStyles("pt-1"),
    referenceName: combineStyles(baseStyles.text.heading5, ""),
    referenceTitle: combineStyles("italic"),
    referenceInstitution: combineStyles(""),
    referenceLocation: combineStyles(""),
    referenceContact: combineStyles(""),
    referencePhone: combineStyles(baseStyles.layout.align_fc, ""),
    referenceEmail: combineStyles(baseStyles.layout.align_fc, ""),
    referenceIcon: combineStyles(LAYOUT.iconStyle, ""),
    referenceLink: combineStyles(hyperlink, ""),
  },

  // Profile component styles
  PROFILE: {
    profileContainer: combineStyles(LAYOUT.sectionContainer_left, ""),
    profileText: combineStyles("pt-1 text-justify"),
  },

  // Work Experience component styles
  WORK_EXPERIENCE: {
    workContainer: combineStyles(LAYOUT.sectionContainer_left, ""),
    workGrid: combineStyles(LAYOUT.gridItem, ""),
    workItem: combineStyles("pt-1"),
    workTitle: combineStyles(baseStyles.text.heading5, ""),
    workIcon: combineStyles(LAYOUT.iconStyle, ""),
    workCompany: combineStyles("italic"),
    workList: combineStyles(LAYOUT.listStyle, "text-justify"),
    workDescription: combineStyles(""),
  },

  // Publications component styles
  PUBLICATIONS: {
    publicationContainer: combineStyles(LAYOUT.sectionContainer_left, ""),
    publicationGrid: combineStyles(LAYOUT.gridItem, ""),
    publicationItem: combineStyles("pt-1 pb-2 border-b border-dashed border-gray-300 w-full"),
    publicationTitle: combineStyles(baseStyles.text.heading5, "text-justify"),
    publicationJournal: combineStyles("text-orange-500 font-bold"),
    publicationAuthors: combineStyles("italic"),
    publicationFooter: combineStyles(baseStyles.layout.align_fc, "justify-between"),
    publicationLink: combineStyles(baseStyles.layout.align_fc, ""),
    publicationLinkText: combineStyles(hyperlink, ""),
    publicationYear: combineStyles(baseStyles.layout.align_fc, ""),
    publicationIcon: combineStyles(LAYOUT.iconStyle, ""),
  },
};

// Destructure component styles for direct import
export const {
  CONTACT,
  CONTACT_ONELINE,
  EDUCATION,
  ACHIEVEMENTS,
  SKILLS,
  REFERENCES,
  PROFILE,
  WORK_EXPERIENCE,
  PUBLICATIONS
} = COMPONENT_STYLES;

// Common UI elements used across components
export const SectionTitle = ({ children, position = "right" }) => (
  <h2 className={position === "right" ? TEXT.sectionTitle_right : TEXT.sectionTitle_left}>
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
  CONTACT_ONELINE,
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
