const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Handle number buttons (all except clear, erase, operators, equals)
buttons.forEach(button => {
   if (
      !button.classList.contains("c") &&
      !button.classList.contains("erase") &&
      !button.classList.contains("plus") &&
      !button.classList.contains("minus") &&
      !button.classList.contains("times") &&
      !button.classList.contains("divide") &&
      !button.classList.contains("equals")
   ) {
      button.addEventListener("click", () => {
         display.value += button.textContent;
      });
   }
});

// Clear button
const btnC = document.querySelector(".c");
btnC.addEventListener("click", () => {
   console.log("Clear clicked");
   display.value = "";
});

// Erase (Backspace) button
const btnErase = document.querySelector(".erase");
btnErase.addEventListener("click", () => {
   console.log("Erase clicked");
   display.value = display.value.slice(0, -1);
});

// Plus button
const btnPlus = document.querySelector(".plus");
btnPlus.addEventListener("click", () => {
   let lastChar = display.value.slice(-1);
   if ("+-×÷".includes(lastChar)) {
      display.value = display.value.slice(0, -1) + "+";
   } else {
      display.value += "+";
   }
});

// Minus button
const btnMinus = document.querySelector(".minus");
btnMinus.addEventListener("click", () => {
   let lastChar = display.value.slice(-1);
   if ("+-×÷".includes(lastChar)) {
      display.value = display.value.slice(0, -1) + "-";
   } else {
      display.value += "-";
   }
});

// Divide button
const btnDivide = document.querySelector(".divide");
btnDivide.addEventListener("click", () => {
   let lastChar = display.value.slice(-1);
   if ("+-×÷".includes(lastChar)) {
      display.value = display.value.slice(0, -1) + "÷";
   } else {
      display.value += "÷";
   }
});

// Times button
const btnTimes = document.querySelector(".times");
btnTimes.addEventListener("click", () => {
   let lastChar = display.value.slice(-1);
   if ("+-×÷".includes(lastChar)) {
      display.value = display.value.slice(0, -1) + "×";
   } else {
      display.value += "×";
   }
});

// Equals button
const btnEquals = document.querySelector(".equals");
btnEquals.addEventListener("click", () => {
   try {
      // Replace × with * and ÷ with / before eval
      let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
      display.value = eval(expression);
   } catch {
      display.value = "Error";
   }
});