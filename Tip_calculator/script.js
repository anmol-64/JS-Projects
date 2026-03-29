const billAmount = document.getElementById("billAmount");
const tipPercentage = document.getElementById("tipPercentage");
const showAmount = document.getElementById("showAmount");
const numberofPeople = document.getElementById("people");
const sharedMoney = document.getElementById("sharedMoney");
const box = document.getElementById("box");
const doneBtn = document.getElementById("done");

const btn = document.getElementById("calculate");

btn.addEventListener("click", () => {
  const a = parseFloat(billAmount.value);
  const b = parseFloat(tipPercentage.value);
  const p = parseFloat(numberofPeople.value);
  const tipAmount = (b / 100) * a;
  const total = a + tipAmount;
  const splitAmount = total / p;
  box.style.display = "block";
  showAmount.textContent = `Tip Amount: $ ${tipAmount.toFixed(2)}`;
  sharedMoney.textContent = `Total splitting bill among ${p} people is $ ${splitAmount.toFixed(2)}`;
});

doneBtn.addEventListener("click", () => {
  box.style.display = "none";
});
