import { buildLlmsTxt } from '@/utils/llms';
import { textResponse } from '@/utils/textResponse';

export const dynamic = 'force-static';

export const GET = () => textResponse(buildLlmsTxt(), 'text/plain');
