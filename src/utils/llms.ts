import { Locale } from '@/types';
import { experiences, projects, site, skills } from '@/data';
import { activeContacts, contactValue } from './contacts';
import { DEFAULT_LOCALE, LOCALES, getDictionary, localize, localizePath, postPath } from './i18n';
import { entriesOf } from './object';
import { getAllPosts, getPostMarkdown } from './posts';
import { absoluteUrl } from './url';

// Builds /llms.txt and /llms-full.txt (https://llmstxt.org): plain-markdown summaries
// of the site for AI assistants, generated from the same data as the pages.

// Language names in English, since the files are written in English.
const LANGUAGE_NAMES: Record<Locale, string> = {
  en: 'English',
  pt: 'Portuguese (pt-PT)',
};

const locale = DEFAULT_LOCALE;
const t = getDictionary(locale);

const header = () => {
  const [current] = experiences;

  return [
    `# ${site.name}`,
    '',
    `> ${t.meta.description}`,
    '',
    `${site.name} is a ${localize(current.role, locale)} at ${current.company}. From the site: "${t.hero.intro}"`,
    `The site is available in English (${absoluteUrl('/')}) and European Portuguese (${absoluteUrl(localizePath('/', 'pt'))}).`,
  ];
};

const experienceLines = (withDescriptions: boolean) =>
  experiences.flatMap((exp) => {
    const company = exp.website ? `[${exp.company}](${exp.website})` : exp.company;
    const line = `- **${localize(exp.role, locale)}** at ${company} (${localize(exp.period, locale)}${exp.location ? `, ${localize(exp.location, locale)}` : ''})`;
    const tech = exp.technologies?.length ? `  Technologies: ${exp.technologies.join(', ')}` : null;
    const description = withDescriptions && exp.description ? `  ${localize(exp.description, locale)}` : null;

    return [line, description, tech].filter((l): l is string => l !== null);
  });

const projectLines = () =>
  projects.map((project) => {
    const url = project.website ?? project.github;
    const name = url ? `[${project.name}](${url})` : project.name;

    return `- ${name}: ${localize(project.description, locale)} (${project.technologies.join(', ')})`;
  });

const skillLines = () =>
  entriesOf(skills).map(([category, group]) =>
    `- ${t.skills.categories[category]}: ${group.map((skill) => skill.name).join(', ')}`
  );

const contactLines = () =>
  activeContacts.map((contact) => `- ${contact.name}: ${contactValue(contact)}`);

const allPosts = () => LOCALES.flatMap(getAllPosts);

const postLines = () =>
  allPosts().map((post) =>
    `- [${post.title}](${absoluteUrl(postPath(post))}) (${LANGUAGE_NAMES[post.lang]}, ${post.date}): ${post.description}`
  );

// A markdown section, omitted entirely when it has no lines.
const section = (title: string, lines: string[]): string[] =>
  lines.length ? ['', `## ${title}`, '', ...lines] : [];

// Sections shared by both files; the full version adds job descriptions.
const profileSections = (full: boolean): string[] => [
  ...section('Experience', experienceLines(full)),
  ...section('Projects', projectLines()),
  ...section('Skills', skillLines()),
  ...section('Contact', [...contactLines(), `- Curriculum (PDF): ${absoluteUrl(site.cv)}`]),
];

const toFile = (lines: string[]): string => [...lines, ''].join('\n');

export const buildLlmsTxt = (): string =>
  toFile([
    ...header(),
    ...section('Pages', [
      `- [Home](${absoluteUrl('/')}): Profile, projects, experience, skills and contact form`,
      `- [Home (Português)](${absoluteUrl(localizePath('/', 'pt'))}): The same profile in European Portuguese`,
      `- [Blog](${absoluteUrl('/blog')}): Technical posts in English`,
      `- [Blog (Português)](${absoluteUrl(localizePath('/blog', 'pt'))}): Technical posts in Portuguese`,
    ]),
    ...profileSections(false),
    ...section('Blog posts', postLines()),
    ...section('Optional', [
      `- [Full profile](${absoluteUrl('/llms-full.txt')}): Everything above plus job descriptions and the full text of every blog post`,
      `- [Sitemap](${absoluteUrl('/sitemap.xml')})`,
    ]),
  ]);

export const buildLlmsFullTxt = (): string =>
  toFile([
    ...header(),
    ...profileSections(true),
    ...section('Blog posts', allPosts().flatMap((post) => [
      `### ${post.title}`,
      '',
      `- URL: ${absoluteUrl(postPath(post))}`,
      `- Language: ${LANGUAGE_NAMES[post.lang]}`,
      `- Published: ${post.date}`,
      ...(post.tags.length ? [`- Tags: ${post.tags.join(', ')}`] : []),
      '',
      getPostMarkdown(post),
      '',
    ])),
  ]);
