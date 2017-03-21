function solve(args) {
    let result = {};

    for (let i = 0; i < args.length; i ++) {
        let towns = JSON.parse(args[i]);
        let name = towns.name;
        let income = towns.income;

        if (result[name] || result[name]) {
            result[name] += income;
        }
        else {
            result[name] = income;
        }
    }

    console.log(result);
}

solve ([
    '{"town":"Sofia","income":200}',
    '{"town":"Varna","income":120}',
    '{"town":"Pleven","income":60}',
    '{"town":"Varna","income":70}'
])