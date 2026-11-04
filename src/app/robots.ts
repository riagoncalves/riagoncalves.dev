import type { MetadataRoute } from 'next';
import { site } from '@/data';

export const dynamic = 'force-static';

// AI search and assistant crawlers, allowed explicitly so the site can be found
// and cited by ChatGPT, Claude, Perplexity, Gemini, Copilot and others.
// A crawler that matches a named group ignores the "*" group, so /admin is disallowed in both.
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'DuckAssistBot',
  'meta-externalagent',
  'MistralAI-User',
  'cohere-ai',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/admin/' },
      { userAgent: AI_CRAWLERS, allow: '/', disallow: '/admin/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
