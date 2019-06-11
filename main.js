let Phrase = require("mingwheel-palindrome-learnenough");

let string = prompt("Please enter a string for palindrome testing");
let phrase = new Phrase(string);

phrase.palindrome() ? alert(`"${phrase.content}" is a palindrome!`)
                    : alert(`"${phrase.content}" is not a palindrome.`);