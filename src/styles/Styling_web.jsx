import React from 'react';
import { baseText } from './Styling_Global.jsx';  // Import baseText directly

const dTheme = {content: '#FFFFFF', bg: '#61584F'};
const bTheme = {content: '#011962', bg: '#FFFFFF'};
const hTheme = {hdText: 'text-[#011962]', kwText: 'text-green-700', bg: 'bg-[#F3F4F6]'};

// Get styles for each column based on selected themes
const getThemeStyles = (theme) => {
  return {
    bg: `bg-[${theme.bg}]`,
    text: `text-[${theme.content}]`,
    border: `border-[${theme.content}]`
  };
};

const ltStyles = getThemeStyles(dTheme);
const rtStyles = getThemeStyles(bTheme);

export const baseLayout = {
  gridColLt: "col-span-1 flex flex-col pr-2 pl-4",
  gridColRt: "col-span-2 flex flex-col pr-4 pl-2",
  // Left column styles (automatically derived from selected theme)
  ltColor_bg: ltStyles.bg,
  ltColor_text: ltStyles.text,
  ltColor_border: ltStyles.border,
  // Right column styles (automatically derived from selected theme)
  rtColor_bg: rtStyles.bg, 
  rtColor_text: rtStyles.text,
  rtColor_border: rtStyles.border,
  // Header styles
  hdColor_text: hTheme.hdText,
  hdColor_bg: hTheme.bg,
  kwColor_text: hTheme.kwText,
  // Alignment styles
  align_fs: "flex items-start",
  align_fc: "flex items-center",
}

const heading_name = `${baseText.heading_6xl}`;
const heading_title = `${baseText.heading_2xl}`;
const heading_section = `${baseText.heading_4xl}`;
const heading_subsection = `${baseText.heading_lg} text-green-700`;
const textBase = `${baseText.baseText_lg}`;

const hyperlink = `${baseText.textURL}`;
const sectionTitle = `${heading_section} border-b-4 pb-2 mb-2 w-full`;

// Layout styles for Web page
export const LAYOUT = {
    // Main page styles
    mainContainer: "flex justify-center bg-white py-4",
    pageContainer_Web: "w-[1200px]",
    sectionContainer: "grid grid-cols-3",
    // Grid styles for contents
    gridColLt: `${baseLayout.gridColLt} ${baseLayout.ltColor_bg} items-center`,
    gridColRt: `${baseLayout.gridColRt} ${baseLayout.rtColor_bg} items-start`,
    gridColRtHd: `${baseLayout.gridColRt} ${baseLayout.hdColor_bg} items-center`,
    gridItem: "grid grid-col gap-2",
    // Section styles
    sectionContainer_lt: `${textBase} ${baseLayout.ltColor_text} w-full mt-4`,
    sectionContainer_rt: `${textBase} ${baseLayout.rtColor_text} w-full mt-4`,
    sectionTitle_lt: `${sectionTitle} ${baseLayout.ltColor_text} ${baseLayout.ltColor_border}`,
    sectionTitle_rt: `${sectionTitle} ${baseLayout.rtColor_text} ${baseLayout.rtColor_border}`,
    // Item styles
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
  headerName: `${heading_name} ${baseLayout.hdColor_text} mt-2 mb-2`,
  headerTitle: `${heading_title} ${baseLayout.kwColor_text} mt-2 mb-2`,
};

export const CONTACT = {
  contactContainer: `${LAYOUT.sectionContainer_lt}`,
  contactGrid: `${LAYOUT.gridItem}`,
  contactItem: `${baseLayout.align_fc}`,
  contactIcon: `${LAYOUT.iconStyle}`,
  contactEmail: `${hyperlink}`,
  contactLink: `${hyperlink}`,
  contactLinkSeparator: `mr-2`,
};

export const EDUCATION = {
  educationContainer: `${LAYOUT.sectionContainer_lt}`,
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
  achievementContainer: `${LAYOUT.sectionContainer_lt}`,
  achievementGrid: `${LAYOUT.gridItem}`,
  achievementItem: `${baseLayout.align_fc}`,
  achievementIcon: `${LAYOUT.iconStyle}`,
  achievementDescription: ``,
};

export const SKILLS = {
  skillContainer: `${LAYOUT.sectionContainer_lt}`,
  skillList: `${LAYOUT.listStyle}`,
  skillDescription: ``,
};

export const PROJECTHIGHLIGHTS = {
  projecthighlightContainer: `${LAYOUT.sectionContainer_lt}`,
  projecthighlightGrid: `${LAYOUT.gridItem}`,
  projecthighlightItem: ``,
  projecthighlightTitle: `${heading_subsection} text-orange-300`,
  projecthighlightObjective:``,
  projecthighlightResponsibility: ``,
  projecthighlightTools: ``,
  projecthighlightImpact: ``,
};

export const REFERENCES = {
  referenceContainer: `${LAYOUT.sectionContainer_lt}`,
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
  profileContainer: `${LAYOUT.sectionContainer_rt}`,
  profileText: ``,
};

export const WORK_EXPERIENCE = {
  workContainer: `${LAYOUT.sectionContainer_rt}`,
  workGrid: `${LAYOUT.gridItem}`,
  workItem: ``,
  workTitle: `${heading_subsection} text-blue-500`,
  workIcon: `${LAYOUT.iconStyle}`,
  workCompany: `italic`,
  workList: `${LAYOUT.listStyle}`,
  workDescription: ``,
};

export const PUBLICATIONS = {
  publicationContainer: `${LAYOUT.sectionContainer_rt}`,
  publicationGrid: `${LAYOUT.gridItem}`,
  publicationItem: `mb-0 pb-2 border-b border-dashed border-gray-300 w-full`,
  publicationTitle: `${heading_subsection} text-blue-500`,
  publicationJournal: `font-bold`,
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
  PROJECTHIGHLIGHTS,
  REFERENCES,
  PROFILE,
  WORK_EXPERIENCE,
  PUBLICATIONS, 
  // UI elements
  SectionTitle,
};

export default Styling;