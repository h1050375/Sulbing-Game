const fs = require('node:fs');
const path = require('node:path');

const source = path.resolve(__dirname, '../src');
const output = path.resolve(__dirname, '../dist');
fs.mkdirSync(output, { recursive: true });
fs.cpSync(source, output, { recursive: true });
console.log('Built src/ → dist/');
