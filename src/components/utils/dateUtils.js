export const formatDateForInput = (date) => {
    if (!date) return "";

    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(dateObj.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};