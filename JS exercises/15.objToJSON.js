function solve(args) {
    let simpleObj = {};
    for (var i = 0; i < args.length; i++) {
        let tokens = args[i].split(' -> ');
        simpleObj[tokens[0]] = tokens[1];

        if (tokens[0] == "age") {
            simpleObj[tokens[0]] = Math.round(parseInt(tokens[1]));
        }

        if (tokens[0] == "grade") {
            simpleObj[tokens[0]] = Math.round(parseInt(tokens[1]));
        }
    }
    console.log(JSON.stringify(simpleObj));
}
