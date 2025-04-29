import { baseText } from './Styling_Global.jsx';
// Theme definitions - using only bright theme now
const subheading_color = 'text-yellow-800';
const bTheme = {content: 'black', bg: '#FFFFFF'};
const hTheme = {hdText: 'text-black', kwText: subheading_color, bg: 'bg-[#F3F4F6]'};

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

export const COVERLETTER = {
  // Main container - A4 page with white background
  mainContainer: "flex flex-col items-center",
  pageContainer: `${baseText.baseText_base} w-[210mm] h-[297mm] flex flex-col border border-black`,
  
  // Content wrapper with 10mm margins
  contentWrapper: `m-[20mm] flex flex-col flex-grow bg-gray-50`,
  nameHeading: `${baseText.heading_6xl} ml-4 mt-2 mb-2 text-[#011962]`,
  contactContainer: `bg-[#61584F] py-2 px-2 mb-2`,
  contactItem: `inline-flex items-center mr-2 text-white`,
  contactIcon: `w-5 h-5 mr-1 flex-shrink-0`,
  contactSeparator: "mx-2",
  // Date section
  dateContainer: `text-right italic mb-2`,
  // Content area
  contentContainer: `flex flex-col flex-grow`,
};

export default { COVERLETTER, LAYOUT, HEADER, CONTACT, baseLayout };
