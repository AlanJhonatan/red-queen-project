export function getFormattedDateTime() {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const formattedDateTime = formatter.format(now).replace(/\/|,|:/g, '-');
  const cleanedDateTime = formattedDateTime.replace(' ', '');

  return cleanedDateTime
}