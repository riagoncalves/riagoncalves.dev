import { buildRssFeed } from '@/utils/rss';
import { textResponse } from '@/utils/textResponse';

export const dynamic = 'force-static';

export const GET = () => textResponse(buildRssFeed('pt'), 'application/rss+xml');
