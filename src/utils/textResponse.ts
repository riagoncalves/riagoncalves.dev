// For static route handlers (llms.txt, RSS) that output generated text files.
export const textResponse = (body: string, contentType: string): Response =>
  new Response(body, {
    headers: { 'Content-Type': `${contentType}; charset=utf-8` },
  });
