function solve(args) {
    args = args.map(Number).sort( 
        function(a, b) {return b-a}
    );
    
    args = args.slice(0, 3);

    for (let i = 0; i < args.length; i ++ ) {
        console.log(args[i]);
    }
}

solve([10,30]);