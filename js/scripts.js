var sentence = prompt("Enter a sentence");

var capitalize = function(sentence) {
  return sentence.charAt(0).toUpperCase();
};

var lastCapitalize = function(sentence) {
  return sentence.slice(-1).toUpperCase();
};
console.log(capitalize(sentence));
console.log(lastCapitalize(sentence));

var combine = function(firstLetter, lastLetter) {
  return firstLetter + lastLetter;
};

console.log(combine(capitalize(sentence), lastCapitalize(sentence)));

var flip= function(lastLetter, firstLetter) {
  return lastLetter + firstLetter;
};

console.log(combine(lastCapitalize(sentence), capitalize(sentence)));
