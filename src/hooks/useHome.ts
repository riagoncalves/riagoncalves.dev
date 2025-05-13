import { useEffect, useState } from "react";
import ProjectsData from "@/data/projects.json";
import SkillsData from '@/data/skills.json'
import ContactsData from '@/data/contacts.json'

export function useHome() {
  const [projects, setProjects] = useState(ProjectsData);
  const [skills, setSkills] = useState(SkillsData);
  const [contacts, setContacts] = useState(ContactsData);

  useEffect(() => {
    // Simulate fetching data from an API or local storage
    setProjects(ProjectsData);
    setSkills(SkillsData);
    setContacts(ContactsData);
  }, []);

  return { projects, skills, contacts };
}
