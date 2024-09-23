// Utility to get the start of the current day
export const getStartOfDay = (date: Date): Date => {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  return start;
};

// Utility to get the start of the current week
export const getStartOfWeek = (date: Date): Date => {
  const start = new Date(date);
  const day = start.getDay(); // Get the day of the week
  const diff = start.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
  start.setDate(diff);
  start.setHours(0, 0, 0, 0);
  return start;
};

// Utility to get the start of the current month
export const getStartOfMonth = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

// Utility to get the start of the current year
export const getStartOfYear = (date: Date): Date => {
  return new Date(date.getFullYear(), 0, 1);
};
