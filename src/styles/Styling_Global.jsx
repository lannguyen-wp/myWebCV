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
  // Add a new website icon (globe icon)
  website: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
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
  ),
  // New trophy icon
  trophy: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3v2m-6-2v2m-6-2v2M7 7l1-2M9 3h6l2 2h4a1 1 0 011 1v3a1 1 0 01-1 1h-1M9 3l-1 2H4a1 1 0 00-1 1v3a1 1 0 001 1h1"></path>
  ),
  // New medal icon
  medal: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 12c0-4.136-3.364-7.5-7.5-7.5S4.5 7.864 4.5 12s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.5 4.5L9 7M14.5 4.5L15 7"></path>
    </>
  ),
  // LinkedIn icon
  linkedin: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x="2" y="9" width="4" height="12" />
      <circle strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" cx="4" cy="4" r="2" />
    </>
  ),
  // Google Scholar icon 
  scholar: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </>
  )
};

// Reusable Icon component
export const Icon = ({ type, className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {ICONS[type]}
  </svg>
);

export const baseText = {
  heading_6xl: "text-6xl font-bold",
  heading_4xl: "text-4xl font-bold",
  heading_2xl: "text-2xl font-bold",
  heading_xl: "text-xl font-bold",
  heading_lg: "text-lg font-bold",
  heading_base: "text-base font-bold",
  heading_md: "text-md font-bold",
  heading_sm: "text-sm font-bold",
  baseText_xl: "text-xl",
  baseText_lg: "text-lg",
  baseText_base: "text-base",
  baseText_md: "text-md",
  baseText_sm: "text-sm",
  baseText_xs: "text-xs",
  textURL: "hover:underline hover:text-blue-500",
}

// Create and export globalStyles object
export const globalStyles = {
  Icon,
  baseText,
};
