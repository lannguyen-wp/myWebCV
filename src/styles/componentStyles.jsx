import { baseLAYOUT, baseTEXT, combineStyles, LAYOUT, TEXT } from "./globalStyles";

const hyperlink = combineStyles(baseTEXT.textURL, "");

// Contact component styles
export const CONTACT = {
  contactContainer: LAYOUT.sectionContainer_left,
  contactGrid: LAYOUT.gridItem,
  contactItem: baseLAYOUT.align_fc,
  //within item => icon and description
  contactIcon: LAYOUT.iconStyle,
  contactDescription: "",
  contactLink: hyperlink,
  contactLinkSeparator: "mr-2",
};

// Education component styles
export const EDUCATION = {
  educationContainer: LAYOUT.sectionContainer_left,
  educationGrid: LAYOUT.gridItem,
  educationItem: "",
  //within item => degree, period, institution
  educationDegree: baseTEXT.heading5,
  educationPeriod: baseLAYOUT.align_fc,
  educationIcon: LAYOUT.iconStyle,
};

// Achievements component styles
export const ACHIEVEMENTS = {
  achievementContainer: LAYOUT.sectionContainer_left,
  achievementGrid: LAYOUT.gridItem,
  achievementItem: baseLAYOUT.align_fc,
  //winthin item => icon and description
  achievementIcon: LAYOUT.iconStyle,
  achievementDescription: "",
};

// Skills component styles
export const SKILLS = {
  skillContainer: LAYOUT.sectionContainer_left,
  skillList: LAYOUT.listStyle,
  skillDescription: "",
};

// References component styles
export const REFERENCES = {
  referenceContainer: LAYOUT.sectionContainer_left,
  referenceGrid: LAYOUT.gridItem,
  referenceName: baseTEXT.heading5,
  referenceTitle: "italic",
  referenceInstitution: "",
  referenceLocation: "",
  referenceContact: "mt-0",
  referencePhone: baseLAYOUT.align_fc,
  referenceEmail: baseLAYOUT.align_fc,
  referenceIcon: LAYOUT.iconStyle,
  referenceLink: hyperlink,
};

// Profile component styles
export const PROFILE = {
  profileContainer: LAYOUT.sectionContainer_right,
  profileText: "",
};

// Work Experience component styles
export const WORK_EXPERIENCE = {
  workContainer: LAYOUT.sectionContainer_right,
  workGrid: LAYOUT.gridItem,
  workItem: "",
  //winthin item => title + time, company, job descriptions
  workTitle: baseTEXT.heading5,
  workIcon: LAYOUT.iconStyle,
  workCompany: "italic",
  workList: LAYOUT.listStyle,
  workDescription: "",
};

// Publications component styles
export const PUBLICATIONS = {
  publicationContainer: LAYOUT.sectionContainer_right,
  publicationGrid: LAYOUT.gridItem,
  publicationItem: "mb-0 pb-2 border-b border-dashed border-gray-300 w-full",
  //winthin items => title, journal, authors, footer: link and year
  publicationTitle: baseTEXT.heading5,
  publicationJournal: "text-orange-500 font-bold",
  publicationAuthors: "italic",
  publicationFooter: combineStyles(baseLAYOUT.align_fc, "justify-between"),
  publicationLink: baseLAYOUT.align_fc,
  publicationLinkText: hyperlink,
  publicationYear: baseLAYOUT.align_fc,
  publicationIcon: LAYOUT.iconStyle,
};

// Combined exports
export const STYLES = {
  ...CONTACT,
  ...EDUCATION,
  ...ACHIEVEMENTS,
  ...SKILLS,
  ...PROFILE,
  ...WORK_EXPERIENCE,
  ...PUBLICATIONS,
  ...REFERENCES
};

export default STYLES;
