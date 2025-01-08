const array = [1,[2, 1],3]

const result = array.flatMap(i => i+1)
console.log(result)

const sentence = "Hello world"
console.log(sentence.split(" "))
// output: ["Hello world"]

// Being that .split will return an array, flatMap will traverse inside of those arrays
const sentences = ["Hello world", "TypeScript is awesome"];
const words = sentences.map(s => s.split(" "));
console.log(words);
//output: ["Hello", "world", "TypeScript", "is", "awesome"]