function sum(args) {
    let nums = args[0].split(' ');
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    let num3 = Number(nums[2]);

    console.log (
        checkForSum(num1, num2, num3) ||
        checkForSum(num2, num3, num1) ||
        checkForSum(num1, num3, num2) ||
        'No'
    );

    function checkForSum(first, second, sum) {
        if (first + second !== sum) {
            return false; 
        }

        if (first > second) {
            [first, second] = [second, first];
        }

        return `${first} + ${second} = ${sum}`;
    }
}

sum(['8', '15', '7']);
sum(["8", "15", "7"]);
sum(["1", "2", "12"]);