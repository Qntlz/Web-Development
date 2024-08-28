// String Methods

// concat(): Combines two or more strings into one.
const name = "Lance";
const newName = name.concat(" ", "Cerenio");
console.log(newName); // Output: Lance Cerenio

// includes(): Checks if a string contains a specified substring.
const poem = "Whispers of dawn, dreams awaken";
const found = poem.includes("dawn");
console.log(found); // Output: true

// length: Returns the number of characters in a string.
const randomWord = "Javascript";
console.log(randomWord.length); // Output: 10

// replaceAll(): Replaces all occurrences of a specified substring with a new substring.
const newPoem = poem.replaceAll("Whispers", "Fall");
console.log(newPoem); // Output: Fall of dawn, dreams awaken

// trim(): Removes whitespace from both ends of a string.
const teststring = "    Apple and Banana";
const newString = teststring.trim();
console.log(newString); // Output: Apple and Banana
