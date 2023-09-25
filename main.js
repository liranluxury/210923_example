const depositUSA = 10000;
const rate = 0.07;
const depositLength = 24;
const result = depositUSA * (1 + rate / 12) ** depositLength;
const costHouse = 13500;
const balance = result - costHouse;
if (balance > 0) {
  console.log(`Yes, we can buy an apartment!! We have more ${balance}$`);
} else {
  console.log(`No, we can't buy an apartment...We have less ${balance}$`);
}
// **************************************
const lang = prompt("What language are you speaking?");
switch (lang) {
  case "en":
    console.log("Hi! How are you?");
    break;
  case "de":
    console.log("Gutten Tag!");
    break;
  case "il":
    console.log("שלום");
    break;
  default:
    console.log("Tray again!");
}
// ******************************************
const res = promt("Сколько будет 7 + или - 15?");

switch (true) {
  case Number(res) === 22:
  case Number(res) === -8:
  case res === "I'm not robot":
    console.log("All good!");
    break;
  default:
    console.log("Tray again!");
}
if (res === "I'm not robot") {
  console.log("All good!");
} else {
  const resNum = Number(res);
  switch (resNum) {
    case 22:
    case -8:
      console.log("All good!");
      break;
    default:
      console.log("Tray again!");
  }
}
// ****************************************
let positionLat = 10;
let positionLong = 20;
let adressLat = 15;
let adressLong = 25;
const formula = Math.sqrt(
  (adressLat - positionLat) ** 2 + (adressLong - positionLong) ** 2
);
console.log(formula);
