export const titleize = (value: string): string => {
  return value
    .toLowerCase()
    .split(' ')
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
}
