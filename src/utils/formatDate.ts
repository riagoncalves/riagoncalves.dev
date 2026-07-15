export const formatDate = (value: string): string => {
  if (!value) return '';

  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
