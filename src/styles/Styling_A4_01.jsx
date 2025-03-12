import React from 'react';
import { baseText } from './Styling_Global.jsx';  // Import baseText directly 

const dTheme = {content: '#FFFFFF', bg: '#61584F'};
const bTheme = {content: '#011962', bg: '#FFFFFF'};
const hTheme = {hdText: 'text-[#011962]', kwText: 'text-blue-500', bg: 'bg-[#F3F4F6]'};

const heading_name = `${baseText.heading_4xl}`;
const heading_title = `${baseText.heading_2xl}`;
const heading_section = `${baseText.heading_2xl}`;
const heading_subsection = `${baseText.heading_sm}`;
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

export const baseLayout = {
  gridColLt: "col-span-2 flex flex-col pr-2 pl-4",
  gridColRt: "col-span-1 flex flex-col pr-4 pl-2",
  // Left column styles (automatically derived from selected theme)
  ltColor_bg: ltStyles.bg,
  ltColor_text: ltStyles.text,
  ltColor_border: ltStyles.border,
  // Right column styles (automatically derived from selected theme)
  rtColor_bg: rtStyles.bg, 
  rtColor_text: rtStyles.text,
  rtColor_border: rtStyles.border,
  // Header styles
  hdColor_text: `${hTheme.hdText}`,
  hdColor_bg: `${hTheme.bg}`,
  kwColor_text: `${hTheme.kwText}`,
  // Alignment styles
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
  sectionContainer: "grid grid-cols-3 h-full",
  // Grid styles for contents
  gridColLt: `${baseLayout.gridColLt} ${baseLayout.ltColor_bg} items-center`,
  gridColRt: `${baseLayout.gridColRt} ${baseLayout.rtColor_bg} items-start`,
  headerRow: "col-span-3 flex flex-col bg-[#F3F4F6] pl-4 justify-center",
  gridItem: "grid grid-col gap-2",
  // Section styles
  sectionContainer_lt: `${textBase} ${baseLayout.ltColor_text} w-full mt-2`,
  sectionContainer_rt: `${textBase} ${baseLayout.rtColor_text} w-full mt-2`,
  sectionTitle_lt: `${sectionTitle} ${baseLayout.ltColor_text} ${baseLayout.ltColor_border}`,
  sectionTitle_rt: `${sectionTitle} ${baseLayout.rtColor_text} ${baseLayout.rtColor_border}`,
  // Item styles
  iconStyle: "w-4 h-4 mr-2 flex-shrink-0",
  listStyle: "list-disc pl-5 mt-1",
};

//console.log("sectionTitle_lt:", LAYOUT.sectionTitle_lt);
//console.log("sectionTitle_rt:", LAYOUT.sectionTitle_rt);

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
  educationGrid: `${LAYOUT.gridItem} mt-1`,
  educationItem: `mt-1`,
  educationDegree: `${heading_subsection}`,
  educationPeriod: `${baseLayout.align_fc}`,
  educationIcon: `${LAYOUT.iconStyle}`,
};

export const ACHIEVEMENTS = {
  achievementContainer: `${LAYOUT.sectionContainer_rt}`,
  achievementGrid: `${LAYOUT.gridItem} mt-1`,
  achievementItem: `${baseLayout.align_fc} mt-1`,
  achievementIcon: `${LAYOUT.iconStyle}`,
  achievementDescription: ``,
};

export const SKILLS = {
  skillContainer: `${LAYOUT.sectionContainer_rt}`,
  skillList: `${LAYOUT.listStyle}`,
  skillDescription: ``,
};

export const REFERENCES = {
  referenceContainer: `${LAYOUT.sectionContainer_rt}`,
  referenceGrid: `${LAYOUT.gridItem} mt-1`,
  referenceItem: `mt-1`,
  referenceName: `${heading_subsection}`,
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
  workGrid: `${LAYOUT.gridItem} mt-1`,
  workItem: `mt-0`,
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
  publicationJournal: `text-orange-500 font-bold`,
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
  SKILLS,
  REFERENCES,
  PROFILE,
  WORK_EXPERIENCE,
  PUBLICATIONS, 
  // UI elements
  SectionTitle,
};

export default Styling;