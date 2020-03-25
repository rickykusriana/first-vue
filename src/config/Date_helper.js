const timeNow = new Date();
const date = timeNow.getFullYear()+'-'+(timeNow.getMonth()+1)+'-'+timeNow.getDate();
const hours = timeNow.getHours();
const minutes = timeNow.getMinutes();
const seconds = timeNow.getSeconds();

let timeString = hours;
timeString += (minutes < 10 ? ':0' : ':') + minutes;
timeString += (seconds < 10 ? ':0' : ':') + seconds;

export const datetime = date+' '+timeString