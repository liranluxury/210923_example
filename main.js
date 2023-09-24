const rateUSD = 80;
const hoursOfWork = 5;
const quantityDaysInWeek = 5;
const orderHours = 40;
const sumDays = 11;
let daysOfjob = orderHours / hoursOfWork;
let chargeForJob = daysOfjob * hoursOfWork * rateUSD;
let isEnoughTime = sumDays - daysOfjob - 2;

console.log(`How much can I charge for a job: 
${chargeForJob}$ `);
console.log(`Is there enough time :
${isEnoughTime < sumDays}`);

console.log(Boolean("5") + 9);
