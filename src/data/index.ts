import { Contact, Experience, Project, Site, SkillsData } from '@/types';
import ContactsJson from './contacts.json';
import ExperiencesJson from './experiences.json';
import ProjectsJson from './projects.json';
import SiteJson from './site.json';
import SkillsJson from './skills.json';

// Typed entry point for the JSON content. Assigning (rather than casting) makes
// TypeScript check every file against its interface at build time.
export const contacts: Contact[] = ContactsJson;
export const experiences: Experience[] = ExperiencesJson;
export const projects: Project[] = ProjectsJson;
export const site: Site = SiteJson;
export const skills: SkillsData = SkillsJson;
