import { buildLlmsFullTxt } from '@/utils/llms';
import { textResponse } from '@/utils/textResponse';

export const dynamic = 'force-static';

export const GET = () => textResponse(buildLlmsFullTxt(), 'text/plain');
