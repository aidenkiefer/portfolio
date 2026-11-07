/** Format date-only content consistently on the server and in visitors' browsers. */
export function formatContentDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  });
}
