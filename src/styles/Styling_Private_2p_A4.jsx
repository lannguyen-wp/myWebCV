import React from 'react';
import { baseText } from './Styling_Global.jsx';

// Theme definitions
const dTheme = {content: '#FFFFFF', bg: '#61584F'};
const bTheme = {content: '#011962', bg: '#FFFFFF'};
const hTheme = {hdText: 'text-[#011962]', kwText: 'text-green-700', bg: 'bg-[#F3F4F6]'};

// Typography scale
const heading_name = `${baseText.heading_4xl}`;
const heading_title = `${baseText.heading_2xl}`;
const heading_section = `${baseText.heading_2xl}`;
const heading_subsection = `${baseText.heading_sm} text-green-700`;
const textBase = `${baseText.baseText_sm}`;

// Get styles for each column based on selected themes
const getThemeStyles = (theme) => {
  return {
    bg: `bg-[${theme.bg}]`,
    text: `text-[${theme.content}]`,
    border: `border-[${theme.content}]`
  };
};

const ltStyles = getThemeStyles(bTheme);
const rtStyles = getThemeStyles(dTheme);

// Base layout classes
export const baseLayout = {
  // Define base column classes without widths (will be applied in LAYOUT)
  gridColLt: "flex flex-col pr-2 pl-4",
  gridColRt: "flex flex-col pr-4 pl-2",
  
  // Theme colors
  ltColor_bg: ltStyles.bg,
  ltColor_text: ltStyles.text,
  ltColor_border: ltStyles.border,
  rtColor_bg: rtStyles.bg, 
  rtColor_text: rtStyles.text,
  rtColor_border: rtStyles.border,
  hdColor_text: `${hTheme.hdText}`,
  hdColor_bg: `${hTheme.bg}`,
  kwColor_text: `${hTheme.kwText}`,
  
  // Common layout patterns
  align_fs: "flex items-start",
  align_fc: "flex items-center",
};

const hyperlink = `${baseText.textURL}`;
const sectionTitle = `${heading_section} border-b-2 pb-0 mb-1 w-full`;

// Layout styles for A4_01 page
export const LAYOUT = {
  // Main page styles
  mainContainer: "flex flex-col items-center",
  pageContainer: "flex flex-col items-center justify-center p-0",
  pageContainer_A4: "w-[210mm] h-[297mm]",
  // Change to flex-col to stack header above content
  sectionContainer: "flex flex-col w-full h-full",
  contentContainer: "flex flex-row w-full h-full",
  // Flex columns with explicit percentage widths
  gridColLt: `w-[60%] ${baseLayout.gridColLt} ${baseLayout.ltColor_bg} items-center`,
  gridColRt: `w-[40%] ${baseLayout.gridColRt} ${baseLayout.rtColor_bg} items-start`,
  
  // Header row - ensure it's full width but doesn't grow
  headerRow: `w-full flex flex-col ${hTheme.bg} pl-4 justify-center`,
  
  // Common spacing and layout
  gridItem: "grid grid-cols-1 gap-2",
  sectionContainer_lt: `${textBase} ${baseLayout.ltColor_text} w-full mt-2`,
  sectionContainer_rt: `${textBase} ${baseLayout.rtColor_text} w-full mt-2`,
  sectionTitle_lt: `${sectionTitle} ${baseLayout.ltColor_text} ${baseLayout.ltColor_border}`,
  sectionTitle_rt: `${sectionTitle} ${baseLayout.rtColor_text} ${baseLayout.rtColor_border}`,
  iconStyle: "w-4 h-4 mr-2 flex-shrink-0", 
  listStyle: "list-disc pl-5 mt-1",
};

export const SectionTitle = ({ children, position = "left" }) => (
  <h2 className={position === "left" ? LAYOUT.sectionTitle_lt : LAYOUT.sectionTitle_rt}>
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
    contactItem: `${baseLayout.align_fc} inline-flex mr-4`,
    websiteItem: `${baseLayout.align_fc} inline-flex mr-4`,
    websitesContainer: `flex`,
    contactLinkSeparator: `mr-2`,
    contactIcon: `${LAYOUT.iconStyle}`,
    contactDescription: ``,
    contactLink: `${hyperlink}`,
};

export const EDUCATION = {
  educationContainer: `${LAYOUT.sectionContainer_rt}`,
  educationGrid: `${LAYOUT.gridItem}`,
  educationItem: ``,
  educationDegree: `${heading_subsection} text-orange-300`,
  educationInstitution: ``,
  educationMetaRow: `${baseLayout.align_fc} justify-between`,
  educationPeriod: `${baseLayout.align_fc}`,
  educationLocation: `${baseLayout.align_fc}`,
  educationIcon: `${LAYOUT.iconStyle}`,
};

export const ACHIEVEMENTS = {
  achievementContainer: `${LAYOUT.sectionContainer_rt}`,
  achievementGrid: `${LAYOUT.gridItem}`,
  achievementItem: `${baseLayout.align_fc}`,
  achievementIcon: `${LAYOUT.iconStyle}`,
  achievementDescription: ``,
};

export const PROJECTHIGHLIGHTS = {
  projecthighlightContainer: `${LAYOUT.sectionContainer_rt}`,
  projecthighlightGrid: `${LAYOUT.gridItem}`,
  projecthighlightItem: ``,
  projecthighlightTitle: `${heading_subsection} text-orange-300`,
  projecthighlightObjective:``,
  projecthighlightResponsibility: ``,
  projecthighlightTools: ``,
  projecthighlightImpact: ``,
};

export const SKILLS = {
  skillContainer: `${LAYOUT.sectionContainer_rt}`,
  skillList: `${LAYOUT.listStyle}`,
  skillDescription: ``,
};

export const REFERENCES = {
  referenceContainer: `${LAYOUT.sectionContainer_rt}`,
  referenceGrid: `${LAYOUT.gridItem}`,
  referenceItem: ``,
  referenceName: `${heading_subsection} text-orange-300`,
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
  profileContainer: `${LAYOUT.sectionContainer_lt}`,
  profileText: ``,
};

export const WORK_EXPERIENCE = {
  workContainer: `${LAYOUT.sectionContainer_lt}`,
  workGrid: `${LAYOUT.gridItem}`,
  workItem: ``,
  workTitle: `${heading_subsection}`,
  workIcon: `${LAYOUT.iconStyle}`,
  workCompany: `italic`,
  workList: `${LAYOUT.listStyle}`,
  workDescription: ``,
};

export const PUBLICATIONS = {
  publicationContainer: `${LAYOUT.sectionContainer_lt}`,
  publicationGrid: `${LAYOUT.gridItem}`,
  publicationItem: `mb-0 pb-2 border-b border-dashed border-gray-300 w-full`,
  publicationTitle: `${heading_subsection}`,
  publicationJournal: `font-bold`,
  publicationAuthors: `italic`,
  publicationFooter: `${baseLayout.align_fc} justify-between`,
  publicationLink: `${hyperlink}`,
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
  PROJECTHIGHLIGHTS,
  SKILLS,
  REFERENCES,
  PROFILE,
  WORK_EXPERIENCE,
  PUBLICATIONS, 
  // UI elements
  SectionTitle,
};

export default Styling;