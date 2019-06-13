(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"mingwheel-palindrome-learnenough":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Reverses a string.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join('');
}
// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns the letters in the content.
  this.letters = function letters() {
    // return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
    const alphaRegEx = /[a-z]/gi;
    return (this.content.match(alphaRegEx) || []).join(""); // short circuit in case of null content
  }

  // Returns content processed for palindrome test.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }
  // Returns true for palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent()
    ? this.processedContent() === this.processedContent().reverse()
    : false;
  }
}
// // Defines a TranslatedPhrase object.
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;

//   // Returns translation processed for palindrome test.
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);
//   }
// }  


},{}]},{},[1]);
