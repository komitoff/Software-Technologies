function solve(args) {
    let result = {};

    for (let i = 0; i < args.length; i ++) {
        let towns = JSON.parse(args[i]);
        let name = towns.town;
        let income = towns.income;

        if (result[name] || result[name]) {
            result[name] += income;
        }
        else {
            result[name] = income;
        }
    }

    let sortedTowns = Object.keys(result).sort();
    for (let i = 0; i < sortedTowns.length; i ++) {
        console.log(`${sortedTowns[i]} -> ${result[sortedTowns[i]]}`);
    }
}

solve ([
    '{"town":"Sofia","income":200}',
    '{"town":"Varna","income":120}',
    '{"town":"Pleven","income":60}',
    '{"town":"Varna","income":70}'
])