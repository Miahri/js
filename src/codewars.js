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
