/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    //sunday is 0
    if (year < 1971 || year > 2100) return false;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const selectedDate = new Date(year, month - 1, day, 14);
    const selectedDay = selectedDate.getDay();
    return days[selectedDay];
};