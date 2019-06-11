// Reverses a string.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join('');
}
// Defines a phrase object.
function Phrase(content) {
  this.content = content;

  // Returns a string in lower case.
  this.processor = function(string) {
    return string.toLowerCase();
  }
  
  // Returns content processed for palindrome test.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }
  // Returns true for palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
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

