function sum(num1, num2, num3) {

    if (num1 + num2 === num3) {
        console.log(num1 + " + " + num2 + " = " + num3);
    }
    else if (num1 + num3 === num2) {
        console.log(num1 + " + " + num3 + " = " + num2);
    }
    else if (num2 + num3 === num1) {
        console.log(num2 + " + " + num3 + " = " + num1);
    }
    else {
        console.log("no");
    }
// }
// sum([8, 15, 7]);
// sum([-5, -3, -2]);
// sum([3, 8, 12]);