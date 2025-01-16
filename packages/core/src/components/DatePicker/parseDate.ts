export function parseDate(date?: string | Date) {
  if (typeof date === "string") {
    const parsed = Date.parse(date);
    if (!isNaN(parsed)) {
      return new Date(parsed);
    }
    console.warn(
      "Invalid date string:",
      `'${date}'.`,
      "See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format"
    );
    return undefined;
  }
  return date;
}
