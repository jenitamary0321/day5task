// 1. For Loop: Iterating over skills
for (let i = 0; i < resumeData.skills.length; i++) {
    console.log(`Skill ${i + 1}: ${resumeData.skills[i]}`);
  }
  
  // 2. For...in Loop: Iterating over contact details
  for (let key in resumeData.contact) {
    if (resumeData.contact.hasOwnProperty(key)) {
      console.log(`${key}: ${resumeData.contact[key]}`);
    }
  }
  
  // 3. For...of Loop: Iterating over experience array
  for (let experience of resumeData.experience) {
    console.log(`Company: ${experience.company}`);
    console.log(`Role: ${experience.role}`);
    console.log(`Duration: ${experience.duration}`);
    for (let responsibility of experience.responsibilities) {
      console.log(`- ${responsibility}`);
    }
  }
  
  // 4. forEach Loop: Iterating over projects array
  resumeData.projects.forEach((project, index) => {
    console.log(`Project ${index + 1}: ${project.name}`);
    console.log(`Description: ${project.description}`);
    console.log(`Technologies: ${project.technologies.join(", ")}`);
  });
  