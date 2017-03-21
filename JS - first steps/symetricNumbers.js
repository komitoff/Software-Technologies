function symetric(n) {
    let number = Number(n[0]);
    let result = '';

    for (let j = 1; j <= number; j ++) {
        if (isSymetric(j)) {
            result += j + ' ';
        }
    }

    console.log(result);

    function isSymetric(num) {

        num = num.toString();
        let length = num.length;

        for (let i = 0; i < length / 2; i ++ ) {
            if (num[i] !== num[length - i - 1]) {
                return false;
            }
        }

        return true;
    }
}

symetric([750]);