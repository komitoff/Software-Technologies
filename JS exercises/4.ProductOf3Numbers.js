function solve (params) {
    let negativeCount = 0;

    for (var index = 0; index < params.length; index++) {
        if (Number(params[index]) < 0) {
            negativeCount ++;
        }
    }

    if (negativeCount % 2 == 0) {
        console.log('Positive');
    }
    else {
        console.log('Negative');
    }
}

solve(['2', '3', '-1']);
solve(['5', '4', '3']);
solve(['-3', '-4', '5']);