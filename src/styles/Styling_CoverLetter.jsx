import { baseText } from './Styling_Global.jsx';

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

export default { COVERLETTER };
