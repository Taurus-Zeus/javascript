// 11. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
//     Enter hours: 40
//     Enter rate per hour: 28
//     Your weekly earning is 1120
const h = parseInt(prompt(`Enter hours`));
const rph = parseFloat(prompt(`Enter rate per hour`));
weeklyearning = h *rph;
alert("Your weekly earning is "+weeklyearning);