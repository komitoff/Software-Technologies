function solve(args) {

    let result = [];
    for (let i = 0; i < args.length; i++) {
        let tokens = args[i].split(' ');
        let command = tokens[0];
        if (command == 'add') {
            result.add(tokens[1]);
        }
    }
}