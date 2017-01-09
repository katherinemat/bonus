var sentence = prompt("Enter a sentence");

var capitalize = function(sentence) {
  return sentence.charAt(0).toUpperCase();
};

var lastCapitalize = function(sentence) {
  return sentence.slice(-1).toUpperCase();
};

var middle = function(sentence) {
  return sentence.substring(1, sentence.length-1);
};

console.log(capitalize(sentence) + middle(sentence) + lastCapitalize(sentence));
