import ProjectsData from "@/data/projects.json";
import SkillsData from '@/data/skills.json';
import ContactsData from '@/data/contacts.json';
import ExperiencesData from '@/data/experiences.json';

export function useHome() {
  return {
    projects: ProjectsData,
    skills: SkillsData,
    contacts: ContactsData,
    experiences: ExperiencesData,
  };
}
