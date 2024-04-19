var guestList = ['Sidra', 'Laiba', 'Hiba', 'Alaya'];
var dontCome = guestList[3];
console.log(dontCome, " nahi a skta");
guestList.splice(0, 1, "Fatima");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
