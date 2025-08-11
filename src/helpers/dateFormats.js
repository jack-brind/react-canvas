export function getAbbreviatedYearsAgo(date) {
  const years = new Date().getFullYear() - new Date(date).getFullYear();
  return `${years}y ago`;
}
