function solve(args) {
    let persons = [];
    for (var i = 0; i < args.length; i++) {
        let incObj = JSON.parse(args[i]);
        // persons[i] = incObj;
        console.log('Name: ' + incObj.name);
        console.log('Age: ' + incObj.age);
        console.log('Date: ' + incObj.date);
    }

    // for (let person in persons) {
    //     console.log('Name: ' + person.name);
    //     console.log('Age: ' + person.age);
    //     console.log('Date: ' + person.date);
    // }
}

solve("name":"Tosho","age":11,"date":"04/04/2005");