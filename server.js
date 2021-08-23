const Difficulty = require('difficulty');
 
// Using Promise
Difficulty.create().then((difficulty) => {
    const a = difficulty.getLevel('Matsushima Rinako');
    const b = difficulty.getLevel('Elric Alphonse');
 
    console.log(`apple is level ${a}, easy!`);
    console.log(`cappuccino is level ${b}, too hard!`);
});