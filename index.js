// run `node index.js` in the terminal
const process = require('process');
console.log(`Hello Node.js v${process.versions.node}!`);
//Variable Scope
/**
 * 1.Global Scope:Outside of function Scope
 * 2.local Scope:Inside the function or block
 */
let globalLet = 'Global';
g1();
function g1() {
  let localLet = 'Local Scope';
  console.log(globalLet);
  console.log(localLet);
}

function g2() {
  let localLet = 'This is local variable';
}
console.log(localLet, globalLet);

process.on('uncaughtException', function (err, src) {
  console.log('is nthis', error);
});
