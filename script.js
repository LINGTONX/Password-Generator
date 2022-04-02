let generateBtn = document.getElementById("generate");
let passwords = document.getElementsByClassName("generated-passwords");
console.log(passwords);
let passArray = ["aR", "tK", "56", "Jh", "%#", "6y", "hj", "@k", "2k"];

function generatePassword() {
  let arrayCollector = [];
  let arrayCollector2 = [];
  let arrayCollector3 = [];
  let arrayCollector4 = [];
  for (let i = 0; i < passArray.length; i++) {
    let randomp = Math.floor(Math.random() * passArray.length);
    arrayCollector.push(passArray[randomp]);
    arrayCollector2.push(
      passArray[randomp >= passArray.length - 1 ? randomp - 1 : randomp + 1]
    );
    arrayCollector3.push(passArray[randomp <= 0 ? randomp + 1 : randomp - 1]);
  }
  [...passwords].forEach((element, i) => {
    if (i === 0) {
      element.textContent = [
        ...arrayCollector
          .join("")
          .slice(0, Math.ceil(arrayCollector.join("").length / 2)),
        ...arrayCollector2
          .join("")
          .slice(0, Math.ceil(arrayCollector.join("").length / 2)),
      ].join("");
    } else if (i === 1) {
      element.textContent = arrayCollector2.join("");
    } else if (i === 2) {
      element.textContent = arrayCollector3.join("");
    } else {
      element.textContent = arrayCollector.join("");
      element.style.color = "#55F991";
      console.log(i);
    }
  });

  console.log(arrayCollector.join(""));
}