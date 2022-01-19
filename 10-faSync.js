const {readFileSync,writeFileSync} = require('fs');
const { syncBuiltinESMExports } = require('module');

const first = readFileSync('./contemt/first.txt','utf8');
const second = readFileSync('./contemt/second.txt','utf8');

// console.log(first,second);

writeFileSync('./contemt/result-syncBuiltinESMExports.txt',
`this is the new one${first +second}`,
{flag:'a'}
);

