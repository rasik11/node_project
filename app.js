// as local dependency
// npm i <packagename>

// globalnpm install -g <packagename>

// package.json
//npm init


const _ = require('lodash');
const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems);