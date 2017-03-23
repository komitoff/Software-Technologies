function solve(params) {
    let length = Number(params[0]);
    let result = [];
    for (let i = 0; i < length; i ++) {
        result[i] = 0;
    }

    for (var i = 1; i < params.length; i++) {
        let regex = /([-0-9])\s+-\s+([-0-9]+)/g;
        let matches = regex.exec(params[i]);
        let index = Number(matches[1]);
        let num = matches[2];
        result[index] = num; 
    }

    for (let i = 0; i < length; i ++) {
        console.log(result[i]);
    }
}

solve(['5', '0 - 3', '3 - -1', '4 - 2']);
console.log('-----------------------------');
solve(['5', '0 - 5', '1 - 6', '2 - 7']);
// solve(['5', '3 - -1']);
/**
 * 
 * var myString = "something format_abc";
 * var myRegexp = /(?:^|\s)format_(.*?)(?:\s|$)/g;
 * var match = myRegexp.exec(myString);
 * console.log(match[1]); // abc
 */
