let superheroes = require('superheroes');
console.log(superheroes.random());

superheroes.all.forEach(hero => {

});
//console.log(superhero.all);*/

let supervillains = require('supervillains');

//console.log(supervillains.all);
console.log(supervillains.random());
superheroes.all.forEach(hero => {

});
console.log(`${supervillains.random()} fights ${superheroes.random()}`);
console.log(superheroes.random(), "fights" , supervillains.random());