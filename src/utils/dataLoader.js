export const loadResumeData = async () => {
  try {
    // Load all data files in parallel
    const [
      applicantProfile,
      workExperience,
      education,
      skills,
      achievements,
      publications,
      projects,
      references
    ] = await Promise.all([
      fetch('/data/applicantProfile.json').then(res => res.json()),
      fetch('/data/workExperience.json').then(res => res.json()),
      fetch('/data/education.json').then(res => res.json()),
      fetch('/data/skills.json').then(res => res.json()),
      fetch('/data/achievements.json').then(res => res.json()),
      fetch('/data/publications.json').then(res => res.json()),
      fetch('/data/projectHighlights.json').then(res => res.json()),
      fetch('/data/references.json').then(res => res.json())
    ]);

    // This return structure matches how your components expect the data
    return {
      personalInfo: applicantProfile.personalInfo,
      contact: applicantProfile.contact,
      profile: applicantProfile.profile,
      workExperience: workExperience.workExperience,
      education: education.education,
      skills: skills.skills,
      skills_gis: skills.skills_gis,
      achievements: achievements.achievements,
      publications: publications.publications,
      projects: projects.projects,
      references: references.references
    };
  } catch (error) {
    console.error('Error loading resume data:', error);
    throw error;
  }
};
