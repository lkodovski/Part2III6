// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function consoleLogger() {
//   const poraka = "Vezbame java script";
//   return poraka;
// }

// console.log(consoleLogger());

// definirajte funkcija so ime vezbamZaTest so dva argumenti predmet1 i predmet2
// koja treba da ja vrati slednata recenica
// "Vezbame po predmetite $Matematika i $Progamiranje"
// Povikajte ja funkcijata i prikazete vo consola

// function vezbamZaTest(predmet1, predmet2) {
//   const vezbam = `Vezbame po predmetite ${predmet1} i ${predmet2}`;
//   return vezbam;
// }

// const vezbame = vezbamZaTest("Matematika", "Programiranje");
// console.log(vezbame);
//function declaration
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// const age1 = calcAge1(2006);
// console.log(age1);

//function expression

// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const age2 = calcAge2(2006);
// console.log(age2);

// Arrow function

// const calcAge = (birthYear) => 2023 - birthYear;
// console.log(calcAge(2006));

// const yearsUntilRetirements = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirements(1991, "Jonas"));

// Functions calling others function

// function cutFruitPieces(fruit) {
//   return 4 * fruit;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// function describeCountry(Counry, population, CapitalCity) {
//   return `Country name ${Counry} with population of ${population} people and capital city ${CapitalCity}`;
// }

// const firstCountry = describeCountry("Macedonia", "2milion", "Skopje");
// console.log(firstCountry);

//
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
*/

// Introduction to Arrays

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// console.log(friends[0]);
// console.log(friends[2]);

// friends[2] = "Jay";
// console.log(friends);

// // Nizata moze da sodrzi i razlicni tipovi na podatoci, promenlivi i drugi nizi

// const firstName = "Jonas";
// const jonas = [firstName, "Smethman", 2021 - 1982, "Teacher", friends];
// console.log(jonas);

// Definirajte niza so ime ucenik so elementi: Ime, Prezime, klas i predmeti kade sto
// predmeti e druga niza so elementi: Makedonski, Matematika i Istorija
// prikazete ja vo konzola
// const predmeti = ["Makeodsnki", "Matematika", "Istorija"];
// const ucenik = ["Milan", "Prangovski", "3-6", predmeti];
// console.log(ucenik);

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const years = [2003, 2001, 2006, 2008];

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[2]),
//   calcAge(years[3]),
// ];
// console.log(ages);

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[3]);
// const ages1 = [age1, age2, age3, age4];
// console.log(ages1);

//Basic Array Methods

// const friends = ["Michael", "Steven", "Peter"];

// const newLength = friends.push("Jay"); // dodava element na nizata
// console.log(friends);
// console.log(newLength);

// friends.unshift("John"); //dodava element na pocetok na niza
// console.log(friends);

// friends.pop(); //brise posleden
// console.log(friends);

// friends.shift(); //brise prv
// console.log(friends);

// console.log(friends.indexOf("Steven")); // vrakja index na elementot vo nizata
// console.log(friends.indexOf("Bob"));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, total);

// Introduction to Objects

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Smethman",
//   job: "teacher",
//   friends: ["Michael", "Steven", "Peter"],
// };

// console.log(jonas);

// console.log(jonas.lastName, jonas.firstName);

// // Dodavanje svojstva
// jonas.location = "Portugal";
// console.log(jonas);

// Objects method

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Smethman",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Steven", "Peter"],
//   hasDriverLicense: true,
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },
//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} years old`;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas.getSummary());

//Vezbi test

//Vezbi test

// Zadaca1.

// a.) Definirajte niza koli so elementi: marka, boja, i zemjaProizvodstvo od kade sto e proizvedena kade sto zemjaProizvodstvo e druga niza od tri zemji(odberete gi proizvolno).

// Prikazete ja vo konzola recenicata:

// {Audi} e kola so {bela} i e proizvedena vo {Germanija}

// b.) Dodadete vo nizata zemjaProizvodstvo uste eden zemja na kraj, prikazete ja vo konzola nizata kako i nejzinata dolzina.

// Zadaca2.

// Definirajte object so ime pacient so svojstva: pacientName, pacientId, pacientSection i eden metod so ime patientDetails koj sto gi vrakja detaljite za samiot objekt  vo oblik:

// {Dragan Todorovski} e pacient so id {2356} i e smesten na {interno}

// Prikazete ja vo konzola recenicata:

// povikajte go metodot na objektot pacient.

// const zemjaProizvodstvo = ["Germanija", "Italija", "Francija"];
// const koli = ["BMW", "Black", zemjaProizvodstvo];

// console.log(
//   `${koli[0]} e kola so ${koli[1]} boja i e proizvedena vo ${zemjaProizvodstvo[0]}`
// );

// zemjaProizvodstvo.push("Japan");
// console.log(zemjaProizvodstvo.length);

// const pacient = {
//   pacientName: "David",
//   pacientId: 2356,
//   pacientSection: ["Hirurgija", "Urologija", "Ginekologija", "Interno"],
//   pacientDetail: function () {
//     return `${this.pacientName} e pacient so id ${this.pacientId} i e smesten vo ${this.pacientSection[3]}`;
//   },
// };
// console.log(pacient.pacientDetail());

// 1. Definiraj funkcija brojNaKvardat koja prima kako argument eden broj i koja go presmetuva kvadratot na toj broj

// 2. Definiraj funkcija zbirNaKvadrati koja kje primi tri broj kako argumenti. Presmetaj ja sumata na kvadratite na ovie brojevi so koristenje na funkcija brojNaKvadrat definirana vo 1.
// Vo konzola treba da ispise:

// Pr: zbirot na broevite $2, $3 i $4 e $29.
// const brojNaKvadrat = function (broj) {
//   return broj * broj;
// };

// const zbirNaKvadrati = function (br1, br2, br3) {
//   const kvBr1 = brojNaKvadrat(br1);
//   const kvBr2 = brojNaKvadrat(br2);
//   const kvBr3 = brojNaKvadrat(br3);
//   const zbirNaKvadrati = kvBr1 + kvBr2 + kvBr3;
//   return `Zbirot na kvadratite na broevite ${br1}, ${br2} i ${br3} e ${zbirNaKvadrati}`;
// };

// console.log(zbirNaKvadrati(2, 3, 4));

// const momentalnaOcena = 3;
// const posakuvanaOcena = 4;
// const imaZnaenje = false;
