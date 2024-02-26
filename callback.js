function greeting(greetingHandler, name) {
  greetingHandler(name);
}
const name = "Halim mama";
const number = [45, 54, 78];
const laptop = { price: 45000, brand: "ASUS", memory: "8gb" };
//greeting(name);
//greeting(number);
//greeting(laptop);

function greetingHandler(name) {
  console.log("Good Morning", name);
}

function greetEvening(name) {
  console.log("Good Evening", name);
}
function greetNight(name) {
  console.log("Good Night", name);
}

greeting(greetingHandler, "SubhanAllah");
greeting(greetingHandler, "Alhamdulillah");
greeting(greetingHandler, "AllahuAkber");

greeting(greetEvening, "Allah");
greeting(greetNight, "Yh Rohman");
