# Phrase object (with palindrome detector)

This is a sample NPM module created in [*Learn Enough JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial) by Michael Hartl.

The module can be used as follows:

<pre>
<b>$ npm install --global mhartl-palindrome</b>
<b>$ vim test.js</b>
let Phrase = require("mhartl-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
<b>$ node test.js</b>
true
</pre>
