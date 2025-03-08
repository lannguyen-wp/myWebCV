/**
 * Global styles shared across multiple components
 */

import React from 'react';

// Layout styles - must use hardcoded values for Tailwind JIT compiler to work
export const LAYOUT = {
  pageContainer: "flex justify-center bg-gray-200 py-8",
  container: "max-w-[1200px] w-full bg-white overflow-hidden",
  container_c1: `w-full md:w-1/3 bg-[#61584F] p-6 flex flex-col items-center`,
  container_c2r1: "w-full md:w-2/3 bg-[#F3F4F6] p-6 flex flex-col items-center",
  container_c2r2: "w-full md:w-2/3 bg-white p-6 flex flex-col items-start",
  flexColumn: "flex flex-col",
  flexRow: "flex flex-row",
};

// Text styles - use hardcoded color values directly in the classes
export const TEXT = {
  myname: "text-6xl font-bold text-[#011962]",
  mykeywords: "text-2xl text-blue-500 font-bold mt-4",
  sectionTitle_left: "text-4xl font-bold border-b-4 pb-2 mb-2 text-white w-full",
  sectionTitle_right: "text-4xl font-bold border-b-4 border-[#011962] pb-2 mb-2 text-[#011962] w-full",
  heading2: "text-4xl font-bold text-[#011962]",
  heading1: "text-2xl font-bold text-[#011962]",
};

// Spacing styles
export const SPACING = {
  section: "my-6",
  item: "my-2",
};

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

// Common UI elements used across components
export const SectionTitle = ({ children, position = "left" }) => (
  <h2 className={position === "left" ? TEXT.sectionTitle_left : TEXT.sectionTitle_right}>
    {children}
  </h2>
);


export default {
  LAYOUT,
  TEXT,
  SPACING,
  ICONS,
  Icon,
};
