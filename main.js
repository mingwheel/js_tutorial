let Phrase = require("mingwheel-palindrome-learnenough");

function palindromeTester(event) {
  event.preventDefault();
  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  phrase.palindrome()
    ? palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`
    : palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is not a palindrome.`;
}

document.addEventListener("DOMContentLoaded", () => {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", (event) => {
    palindromeTester(event);
  });
});