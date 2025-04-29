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
      services,
      references,
      qat_applicantProfile,
      qat_workExperience,
      qat_education,
      qat_skills,
      qat_references,
    ] = await Promise.all([
      fetch('/data/applicantProfile.json').then(res => res.json()),
      fetch('/data/workExperience.json').then(res => res.json()),
      fetch('/data/education.json').then(res => res.json()),
      fetch('/data/skills.json').then(res => res.json()),
      fetch('/data/achievements.json').then(res => res.json()),
      fetch('/data/publications.json').then(res => res.json()),
      fetch('/data/projectHighlights.json').then(res => res.json()),
      fetch('/data/professionalServices.json').then(res => res.json()),
      fetch('/data/references.json').then(res => res.json()),
      fetch('/data/qat_applicantProfile.json').then(res => res.json()),
      fetch('/data/qat_workExperience.json').then(res => res.json()),
      fetch('/data/qat_education.json').then(res => res.json()),
      fetch('/data/qat_skills.json').then(res => res.json()),
      fetch('/data/qat_references.json').then(res => res.json()),
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
      services: services.services,
      references: references.references,
      qat_personalInfo: qat_applicantProfile.personalInfo,
      qat_contact: qat_applicantProfile.contact,
      qat_profile: qat_applicantProfile.profile,
      qat_workExperience: qat_workExperience.workExperience,
      qat_extraExperience: qat_workExperience.extraExperience,
      qat_education: qat_education.education,
      qat_skills: qat_skills.skills,
      qat_references: qat_references.references,
    };
  } catch (error) {
    console.error('Error loading resume data:', error);
    throw error;
  }
};
