import { Locale, Post } from '@/types';
import { experiences, projects, site, skills } from '@/data';
import { emailAddress, profileLinks } from './contacts';
import { LOCALES, LOCALE_TAGS, getDictionary, localize, localizePath, postPath } from './i18n';
import { absoluteUrl } from './url';

const PERSON_ID = `${site.url}/#person`;
const WEBSITE_ID = `${site.url}/#website`;

const personRef = { '@id': PERSON_ID };
const websiteRef = { '@id': WEBSITE_ID };

// Profiles that identify the same person elsewhere, so search engines and AI
// assistants can tell this Ricardo Gonçalves apart from others with the name.
const sameAs = profileLinks.map((contact) => contact.link);

const blogId = (locale: Locale) => `${absoluteUrl(localizePath('/blog', locale))}#blog`;

const person = (locale: Locale) => {
  const [current] = experiences;

  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: site.name,
    url: site.url,
    description: getDictionary(locale).meta.description,
    jobTitle: localize(current.role, locale),
    worksFor: {
      '@type': 'Organization',
      name: current.company,
      url: current.website ?? undefined,
    },
    email: emailAddress,
    sameAs,
    knowsAbout: Object.values(skills).flat().map((skill) => skill.name),
    knowsLanguage: LOCALES.map((l) => LOCALE_TAGS[l]),
  };
};

const website = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: site.url,
  name: site.name,
  inLanguage: LOCALES.map((l) => LOCALE_TAGS[l]),
  author: personRef,
  publisher: personRef,
});

const breadcrumbs = (items: { name: string, path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

const blogTrail = (locale: Locale) => {
  const t = getDictionary(locale);

  return [
    { name: t.nav.home, path: localizePath('/', locale) },
    { name: t.blog.title, path: localizePath('/blog', locale) },
  ];
};

// Every page's graph includes the site and its author, so entities link up across pages.
const graph = (locale: Locale, ...nodes: object[]) => ({
  '@context': 'https://schema.org',
  '@graph': [...nodes, person(locale), website()],
});

export const homeStructuredData = (locale: Locale) => {
  const t = getDictionary(locale);
  const url = absoluteUrl(localizePath('/', locale));

  return graph(locale, {
    '@type': 'ProfilePage',
    '@id': `${url}#profile`,
    url,
    name: t.meta.title,
    description: t.meta.description,
    inLanguage: LOCALE_TAGS[locale],
    isPartOf: websiteRef,
    mainEntity: personRef,
    hasPart: projects.map((project) => ({
      '@type': 'SoftwareSourceCode',
      name: project.name,
      description: localize(project.description, locale),
      keywords: project.technologies.join(', '),
      codeRepository: project.github ?? undefined,
      url: project.website ?? project.github ?? undefined,
      author: personRef,
    })),
  });
};

export const blogStructuredData = (locale: Locale, posts: Post[]) => {
  const t = getDictionary(locale);

  return graph(
    locale,
    {
      '@type': 'Blog',
      '@id': blogId(locale),
      url: absoluteUrl(localizePath('/blog', locale)),
      name: `${t.blog.title} | ${site.name}`,
      description: t.meta.blogDescription,
      inLanguage: LOCALE_TAGS[locale],
      isPartOf: websiteRef,
      author: personRef,
      blogPost: posts.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        url: absoluteUrl(postPath(post)),
        datePublished: post.date,
        author: personRef,
      })),
    },
    breadcrumbs(blogTrail(locale)),
  );
};

export const blogPostStructuredData = (post: Post, translation?: Post) => {
  const url = absoluteUrl(postPath(post));

  return graph(
    post.lang,
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      url,
      mainEntityOfPage: url,
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: LOCALE_TAGS[post.lang],
      keywords: post.tags.join(', ') || undefined,
      image: absoluteUrl(post.cover ?? localize(site.image, post.lang)),
      author: personRef,
      publisher: personRef,
      isPartOf: { '@id': blogId(post.lang) },
      workTranslation: translation && {
        '@type': 'BlogPosting',
        url: absoluteUrl(postPath(translation)),
        inLanguage: LOCALE_TAGS[translation.lang],
      },
    },
    breadcrumbs([...blogTrail(post.lang), { name: post.title, path: postPath(post) }]),
  );
};
