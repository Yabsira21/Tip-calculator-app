let current = -1;
let bill = 0;
let tipPercentage = 0;
let billAndTip = 0;
let totTips = 0;

let tipPerPerson = 0;
let totPerperson = 0;

let billInput = document.querySelector("#bill");
let peopleInput = document.querySelector("#people");
let tipBtn = document.querySelectorAll(".Tips");
let redBorder = document.querySelector("#p");
let errorMsg = document.querySelector("#error");
let tipInput = document.querySelector("#tipInput");
let ans_1 = document.querySelector("#Num-1");
let ans_2 = document.querySelector("#Num-2");
let resetBtn = document.querySelector("#Reset");

let percentage = {
  0: 0.05,
  1: 0.1,
  2: 0.15,
  3: 0.25,
  4: 0.5,
};

for (let i = 0; i < tipBtn.length; i++) {
  tipBtn[i].addEventListener("click", function () {
    if (current == -1) {
      //   tipBtn[i].style.color = "hsl(183, 100%, 15%)";
      //   tipBtn[i].style.backgroundColor = "white";
      // tipBtn[i].classList.toggle(".dark");
      current = i;
      tipBtn[i].style.color = " hsl(183, 100%, 15%)";
      tipBtn[i].style.backgroundColor = "hsl(172, 67%, 45%)";
    } else {
      tipBtn[current].style.backgroundColor = "hsl(183, 100%, 15%)";
      tipBtn[current].style.color = "white";
      current = i;
      tipBtn[i].style.color = " hsl(183, 100%, 15%)";
      tipBtn[i].style.backgroundColor = "hsl(172, 67%, 45%)";
    }
  });
}

peopleInput.addEventListener("keydown", function (e) {
  redBorder.style.border = "none";
  errorMsg.textContent = "";
  bill = Number(billInput.value);
  if (e.key === "Enter") {
    if (peopleInput.value <= 0) {
      errorMsg.textContent = "Can't be zero";
      redBorder.style.border = "2px solid red";
    } else {
      if (current != -1 || tipInput.value) {
        tipPercentage = tipInput.value
          ? Number(tipInput.value) / 100
          : percentage[current];

        totTips = tipPercentage * bill;

        billAndTip = bill + bill * tipPercentage;
        tipPerPerson = totTips / Number(peopleInput.value);
        totPerperson = billAndTip / Number(peopleInput.value);

        // let number = 3.14159;
        // let roundedNumber = number.toFixed(2);

        ans_1.textContent = `$${tipPerPerson.toFixed(2)}`;
        ans_2.textContent = `$${totPerperson.toFixed(2)}`;
      }
    }
  }
});

resetBtn.addEventListener("click", function () {
  for (let i = 0; i < tipBtn.length; i++) {
    tipBtn[i].style.backgroundColor = "hsl(183, 100%, 15%)";
    tipBtn[i].style.color = "white";
  }
  current = -1;
  bill = 0;
  tipPercentage = 0;
  billAndTip = 0;
  totTips = 0;

  tipPerPerson = 0;
  totPerperson = 0;

  ans_1.textContent = "$0.00";
  ans_2.textContent = "$0.00";

  billInput.value = "";
  peopleInput.value = "";
  tipInput.value = "";
});
