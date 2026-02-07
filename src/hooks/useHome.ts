import { useEffect, useState } from "react";
import ProjectsData from "@/data/projects.json";
import SkillsData from '@/data/skills.json';
import ContactsData from '@/data/contacts.json';
import ExperiencesData from '@/data/experiences.json';

export function useHome() {
  const [projects, setProjects] = useState(ProjectsData);
  const [skills, setSkills] = useState(SkillsData);
  const [contacts, setContacts] = useState(ContactsData);
  const [experiences, setExperiences] = useState(ExperiencesData);

  useEffect(() => {
    setProjects(ProjectsData);
    setSkills(SkillsData);
    setContacts(ContactsData);
    setExperiences(ExperiencesData);
  }, []);

  return { projects, skills, contacts, experiences };
}
