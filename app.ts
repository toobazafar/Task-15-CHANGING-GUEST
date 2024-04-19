let guestList = ['Sidra','Laiba','Hiba','Alaya'];
let dontCome = guestList[0];
console.log(dontCome, " nahi a skta");
guestList.splice(0, 1,"Fatima");
guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));
