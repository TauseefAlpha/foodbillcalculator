const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeople = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");
/* 
🌟 APP: Tip Calculator

calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

*/

const calculateBill = () => {
  let bill = Number(billTotalInput.value);
  let tipamount = Number(tipInput.value);
  let numberofple = Number(numberOfPeople.innerText);
  let tipPercentage = tipamount / 100;
  let totaltip = bill * tipPercentage;
  let totalbill = (bill + totaltip) / numberofple;
  perPersonTotal.innerText = totalbill.toFixed(2);
};

// ** Splits the bill between more people **
const increasePeople = () => {
  let numberofple = Number(numberOfPeople.innerText);
  numberofple++;
  numberOfPeople.innerText = numberofple;
  calculateBill();
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  let numberofple = Number(numberOfPeople.innerText);

  if (numberofple <= 1) {
   throw"number of people is less than 1 or equal to 1 i am gonna stop";
    return;
  }
  numberofple--;
  numberOfPeople.innerText = numberofple;
  calculateBill();
};
