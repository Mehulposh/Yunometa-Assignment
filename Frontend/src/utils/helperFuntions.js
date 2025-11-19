/**
 * Formats a date object or date string into a localized date string
 * @param {Date|string} date - The date to format
 * @returns {string} Formatted date string in MM/DD/YYYY format (locale-dependent)
 * @example
 * formatDate(new Date('2025-11-19')) // Returns "11/19/2025"
 * formatDate('2025-11-19T08:30:00.000Z') // Returns "11/19/2025"
 */
export const formatDate = (date) => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(date).toLocaleDateString(undefined, options);
};

/**
 * Formats a date string into YYYY-MM-DD format for HTML date input fields
 * @param {string} dateString - The date string to format (ISO 8601 or any valid date string)
 * @returns {string} Date string in YYYY-MM-DD format, or empty string if input is invalid
 * @example
 * formatDateForInput('2025-11-19T08:30:00.000Z') // Returns "2025-11-19"
 * formatDateForInput(null) // Returns ""
 */
export const formatDateForInput = (dateString) => {
  // Return empty string if no date is provided
  if (!dateString) return "";
  
  // Create Date object from input string
  const date = new Date(dateString);
  
  // Extract date components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed (0-11)
  const day = String(date.getDate()).padStart(2, "0");
  
  // Return formatted string in YYYY-MM-DD format (required by HTML date inputs)
  return `${year}-${month}-${day}`;
};