//Hello World! => elloHay orldWay!
const pigIt = s => s.replace(/(\w)(\w*)/g, '\$2\$1ay');

pigIt('Hello World!');