function solve (params) {
    
    let dictionary = [];
    for (let i = 0; i < params.length; i++) {
        let tokens = params[i].split(' ');

        if (tokens[1] === undefined) {
            if (dictionary[tokens[0]].length == 0) {
                console.log('None');
                return;
            }

            for (var j = 0; j < dictionary[tokens[0]].length; j++) {
                console.log(dictionary[tokens[0]][j]);
            }
        }
        dictionary[tokens[0]].add(tokens[1]);
    }
}

solve('key value',
        'key');