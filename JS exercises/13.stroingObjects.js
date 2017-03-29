function solve(params) {
    let person = {
        name: "default",
        age: "default",
        grade: "default"
    };

    for (var i = 0; i < params.length; i++) {
        let tokens = params[i].split(' -> ');
        person.name = tokens[0];
        person.age = tokens[1];
        person.grade = tokens[2];

        console.log("Name: " + person.name);
        console.log("Age: " + person.age);
        console.log("Grade: " + person.grade);
    }

}