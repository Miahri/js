//Hello World! => elloHay orldWay!
const pigIt = s => s.replace(/(\w)(\w*)/g, '\$2\$1ay');

pigIt('Hello World!');

//[1,2,3,4,5,6,7], 3 => [3,6,2,7,5,1,4]
function josephus(items,k){
    //your code here
    let p = 0,
        res = [];
    if (items.length > 1 && k !== 1) {
        while (items.length > 0) {
            p = (p + k - 1) % items.length;
            let splicedItem = items.splice(p, 1);
            res.push(...splicedItem);
        }
    } else { res = items };

    return res;
}

josephus([1,2,3,4,5,6,7], 3);

function isMerge(s, part1, part2) {
    return !s ? !(part1 || part2) :
        s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
        s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}

isMerge('codewars', 'cdwr', 'oeas');

/*Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.*/
function firstNonRepeatingLetter(s) {
    // Add your code here
    let charsArr = [...s.toUpperCase()];
    let count = {},
        res;
    for (let i = 0; i < charsArr.length; i++) {
        if(count[charsArr[i]]) {
            count[charsArr[i]] += 1;
        } else {
            count[charsArr[i]] = 1;
        }
    }
    for (let key in count) {
        if(count[key] === 1) {
            res = key;
            break;
        } else res = "";
    }
    for (const letter of s) {
        if(letter.toUpperCase() == res.toUpperCase() ) {
            res = letter;
        }
    }

    return res;
}

firstNonRepeatingLetter('sTreSS')
