import React from 'react';
import { baseText } from './Styling_Global.jsx';

// Theme definitions - using only bright theme now
const subheading_color = 'text-[#7e191b]';
const bTheme = {content: 'black', bg: '#FFFFFF'};
const hTheme = {hdText: 'text-black', kwText: subheading_color, bg: 'bg-[#fffbf7]'};

// Typography scale
const heading_name = `${baseText.heading_4xl}`;
const heading_title = `${baseText.heading_2xl}`;
const heading_section = `${baseText.heading_2xl}`;
const heading_subsection = `${baseText.heading_sm}`;
const textBase = `${baseText.baseText_sm}`;

// Get styles based on bright theme
const themeStyles = {
  bg: `bg-[${bTheme.bg}]`,
  text: `text-[${bTheme.content}]`,
  border: `border-[${bTheme.content}]`
};

// Base layout classes
export const baseLayout = {
  // Single column layout base
  gridCol: "flex flex-col px-6",
  
  // Theme colors - only using bright theme
  mainColor_bg: themeStyles.bg,
  mainColor_text: themeStyles.text,
  mainColor_border: themeStyles.border,
  hdColor_text: `${hTheme.hdText}`,
  hdColor_bg: `${hTheme.bg}`,
  kwColor_text: `${hTheme.kwText}`,
  
  // Common layout patterns
  align_fs: "flex items-start",
  align_fc: "flex items-center",
};

const hyperlink = `${baseText.textURL}`;
const sectionTitle = `${heading_section} border-b-2 pb-0 mb-1 w-full`;

// Layout styles for A4_01 page - single column
export const LAYOUT = {
  // Main page styles
  mainContainer: "flex flex-col items-center",
  pageContainer: "flex flex-col items-center justify-center p-0",
  pageContainer_A4: "w-[210mm] h-[297mm]",
  // Single column layout
  sectionContainer: "flex flex-col w-full h-full",
  contentContainer: "flex flex-col w-full h-full",
  // Single column with full width
  gridCol: `w-full ${baseLayout.gridCol} ${baseLayout.mainColor_bg} items-center`,
  // Header row
  headerRow: `w-full flex flex-col ${hTheme.bg} px-6 justify-center`,
  // Common spacing and layout
  gridItem: "grid grid-cols-1 gap-1",
  sectionContainer_main: `${textBase} ${baseLayout.mainColor_text} w-full mt-2`,
  sectionTitle_main: `${sectionTitle} ${baseLayout.mainColor_text} ${baseLayout.mainColor_border}`,
  iconStyle: "w-4 h-4 mr-2 flex-shrink-0", 
  listStyle: "list-disc pl-5 mt-1",
};

export const SectionTitle = ({ children }) => (
  <h2 className={LAYOUT.sectionTitle_main}>
    {children}
  </h2>
);

export const HEADER = {
  headerContainer: "w-full",
  headerName: `${heading_name} ${baseLayout.hdColor_text} mt-2 mb-1`,
  headerTitle: `${heading_title} ${baseLayout.kwColor_text} mt-0 mb-1`,
};

export const CONTACT = {
    contactContainer: `mt-0 mb-2 ${baseLayout.hdColor_text} text-sm`,
    contactGrid: `flex flex-wrap items-center`,
    contactItem: `${baseLayout.align_fc} inline-flex mr-3`,
    websiteItem: `${baseLayout.align_fc} inline-flex mr-0`,
    websitesContainer: `flex`,
    contactLinkSeparator: `mr-2`,
    contactIcon: `${LAYOUT.iconStyle}`,
    contactDescription: ``,
    contactLink: `${hyperlink}`,
};

// Update EDUCATION styles to include only what's used in Education_Academic.jsx
export const EDUCATION = {
  educationContainer: `${LAYOUT.sectionContainer_main}`,
  educationGrid: `${LAYOUT.gridItem}`,
  educationItem: `grid grid-cols-[auto_1fr] gap-4`,
  educationDegree: `${heading_subsection} ${subheading_color} inline-block`,
  educationInlineRow: `flex flex-wrap items-center justify-between`,
  educationPeriod: `${baseLayout.align_fc}`,
  educationIcon: `${LAYOUT.iconStyle}`,
  educationInstitutionLocation: `inline-block`,
  educationYearColumn: `flex flex-col`,
  educationContentColumn: `flex flex-col w-full`
};

export const ACHIEVEMENTS = {
  achievementContainer: `${LAYOUT.sectionContainer_main}`,
  achievementGrid: `${LAYOUT.gridItem}`,
  achievementItem: `${baseLayout.align_fc}`,
  achievementIcon: `${LAYOUT.iconStyle}`,
  achievementDescription: ``,
};

export const SKILLS = {
  skillContainer: `${LAYOUT.sectionContainer_main}`,
  skillList: `grid grid-cols-2 gap-x-6 gap-y-1 pl-5 mt-1`, // Simple 2-column grid with list styling
  skillItem: `list-disc pl-0 mb-0`, // Individual skill items
  skillDescription: ``
};

export const SERVICES = {
  serviceContainer: `${LAYOUT.sectionContainer_main}`,
  serviceList: `flex flex-col gap-1`,
  serviceGrid: `grid grid-cols-[1fr_6fr] gap-4`, // 2-column grid where right column is 3x wider
  serviceTitleColumn: ``,
  serviceDescriptionColumn: ``,
  serviceTitle: `${heading_subsection} ${subheading_color}`,
  serviceDescription: ``,
};

export const REFERENCES = {
  referenceContainer: `${LAYOUT.sectionContainer_main}`,
  referenceGrid: `grid grid-cols-4`,
  referenceItem: ``,
  referenceName: `${heading_subsection} ${subheading_color}`,
  referencePosition: `italic`, 
  referenceInstitution: ``,
  referenceLocation: ``,
  referenceContact: ``, 
  referencePhone: `${baseLayout.align_fc}`,
  referenceEmail: `${baseLayout.align_fc}`,
  referenceIcon: `${LAYOUT.iconStyle}`,
  referenceLink: `${hyperlink}`,
};

export const PROFILE = {
  profileContainer: `${LAYOUT.sectionContainer_main}`,
  profileText: ``,
};

export const WORK_EXPERIENCE = {
  workContainer: `${LAYOUT.sectionContainer_main}`,
  workGrid: `${LAYOUT.gridItem}`,
  workItem: ``,
  workTitle: `${heading_subsection} ${subheading_color}`,
  workIcon: `${LAYOUT.iconStyle}`,
  workCompany: `italic`,
  workList: `${LAYOUT.listStyle}`,
  workDescription: ``,
};

export const PUBLICATIONS = {
  publicationContainer: `${LAYOUT.sectionContainer_main}`,
  publicationGrid: `${LAYOUT.gridItem}`,
  publicationItem: `mb-0 pb-1 border-b border-dashed border-gray-300 w-full`,
  publicationTitle: `${heading_subsection} ${subheading_color}`,
  publicationJournal: ``,
  publicationUrl: `font-normal `, // Added style for URL
  publicationAuthors: `italic`,
  publicationFooter: `${baseLayout.align_fc} justify-between`,
  publicationLink: `${baseLayout.align_fc}`,
  publicationLinkText: `${hyperlink}`,
  publicationYear: `${baseLayout.align_fc}`,
  publicationIcon: `${LAYOUT.iconStyle}`,
}; 

const Styling = {
  // Base styles
  LAYOUT,
  // Component styles
  HEADER,
  CONTACT,
  EDUCATION,
  ACHIEVEMENTS,
  SKILLS,
  SERVICES, // Add the new component styling
  REFERENCES,
  PROFILE,
  WORK_EXPERIENCE,
  PUBLICATIONS, 
  // UI elements
  SectionTitle,
};

export default Styling;