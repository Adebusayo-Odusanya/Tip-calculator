/* 
🌟 APP: Tip Calculator

These are the 3 functions 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These are all the DIV ID's i'm gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here 
// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// Get number of people from number of people div

let numberOfPeople = Number(numberOfPeopleDiv.innerText)


// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let bill = Number(billInput.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  let tip = Number(tipInput.value) / 100;

  // get the total tip amount
  let tipAmount = tip * bill;

  // calculate the total (tip amount + bill)
  let total = bill + tipAmount;

  // calculate the per person total (total divided by number of people)
 const  perPersonTotal = total / numberOfPeople;


  // update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerText = `$ ${perPersonTotal.toFixed(2)}`;
}



// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1;

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();

}

// ** Splits the bill between fewer people **

     
const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return;
  }

  numberOfPeople -= 1;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
}

const aboutme = {
  "en": "My name is Ayomide, I am a programmer",
  "fr": "Je m'appel Ayomide, Je suis en programmer",
  "ee": "Minu nimi on Ayomide, Ma olen programmer"
}
document.getElementById("about-me").innerText = aboutme["en"];
const changeLanguage = (language) => {
  document.getElementById("about-me").innerText = aboutme[language];
  document.getElementById("billTitle").innerText = billTitle[language];
  document.getElementById("tipTitle").innerText = tipTitle[language];
  document.getElementById("peopleTitle").innerText = 
  peopleTitle[language];
  document.getElementById('personTitle').innerText = personTitle[language];
}

const billTitle = {
  "en": "Bill total",
  "fr": "Total de la facture",
  "ee": "Arve kokku"
}

const tipTitle = {
  "en": "Bill total",
  "fr": "Total de la facture",
  "ee": "Arve kokku"
}

const peopleTitle = {
  "en": "Tip",
  "fr": "Conseil",
  "ee": "jootraha"
}

const personTitle = {
  "en": "Tip",
  "fr": "Total par personne",
  "ee": "Kokku inimese kohta"
}