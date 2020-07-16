var randomWords = require('random-words');

console.log(randomWords());


console.log(randomWords(5));
['army', 'beautiful', 'became', 'if', 'actually']

console.log(randomWords({ min: 3, max: 10 }));
['became', 'arrow', 'article', 'therefore']

