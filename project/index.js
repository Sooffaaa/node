// подключение нескольких модулей в папке и свести в один и потом подключать

const random = require('./random');
const {randomInt, randomArr} = require('./random');

console.log(randomInt(1000, 1500));

console.log(randomArr(4));