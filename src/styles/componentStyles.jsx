// Contact component styles
export const CONTACT = {
  contactContainer: "text-white w-full",
  contactGrid: "grid grid-col gap-2",
  contactItem: "flex items-start",
  contactIcon: "w-5 h-5 mr-2 flex-shrink-0",
  contactLink: "text-white underline hover:text-blue-500",
  contactLinkSeparator: "ml-1 mr-1"
};

// Education component styles
export const EDUCATION = {
  educationContainer: "text-white w-full mt-4",
  educationGrid: "grid grid-col gap-2",
  educationDegree: "font-bold text-lg",
  educationPeriod: "flex items-center text-white",
  educationIcon: "w-4 h-4 mr-1 text-white"
};

// Achievements component styles
export const ACHIEVEMENTS = {
  achievementContainer: "text-white w-full mt-4",
  achievementGrid: "grid grid-col gap-2",
  achievementItem: "flex items-start",
  achievementIcon: "w-5 h-5 mr-2 flex-shrink-0"
};

// Skills component styles
export const SKILLS = {
  skillContainer: "text-white w-full mt-4",
  skillGrid: "grid grid-col gap-2",
  skillItem: "flex items-start"
};

// Profile component styles
export const PROFILE = {
  profileContainer: "w-full",
  profileText: "text-gray-700"
};

// Work Experience component styles
export const WORK_EXPERIENCE = {
  workContainer: "w-full mt-4",
  workGrid: "grid grid-col gap-2",
  workHeader: "flex justify-between items-baseline",
  workTitle: "font-bold text-lg text-[#011962]",
  workYears: "flex items-center text-black",
  workIcon: "w-4 h-4 mr-1 text-black",
  workSubheader: "flex justify-between items-baseline",
  workCompany: "italic",
  workLocation: "flex items-center text-black",
  workList: "list-disc pl-5 mt-1 text-black",
  workListItem: "mb-0"
};

// Publications component styles
export const PUBLICATIONS = {
  publicationContainer: "w-full mt-4",
  publicationGrid: "grid grid-col gap-2",
  publicationItem: "mb-0 pb-2 border-b border-dashed border-gray-300 w-full", // Added border styling
  publicationTitle: "font-bold text-lg text-[#011962]",
  publicationJournal: "text-orange-500 font-bold",
  publicationAuthors: "italic",
  publicationFooter: "flex items-center justify-between",
  publicationLink: "flex items-center",
  publicationLinkText: "text-black underline hover:text-blue-500",
  publicationYear: "flex items-center text-black",
  publicationIcon: "w-4 h-4 mr-1 text-black"
};

// References component styles
export const REFERENCES = {
  referenceContainer: "text-white w-full mt-4",
  referenceGrid: "grid grid-cols-1 gap-4",
  referenceName: "font-bold text-lg",
  referenceTitle: "italic",
  referencePosition: "italic",
  referenceInstitution: "",
  referenceLocation: "",
  referenceContact: "mt-1",
  referencePhone: "flex items-center",
  referenceEmail: "flex items-center",
  referenceIcon: "w-4 h-4 mr-1",
  referenceLink: "text-white underline hover:text-blue-500"
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
