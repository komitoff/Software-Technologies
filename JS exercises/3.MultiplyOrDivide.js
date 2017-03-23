function solve (params) {
    let first = Number(params[0]);
    let second = Number(params[1]);

    if (first <= second) {
        console.log(first * second);
    }
    else {
        console.log(first / second);
    }
}


solve(['2', '3']);
solve(['13', '13']);
solve(['3', '2']);
solve(['144', '12']);