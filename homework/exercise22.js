let total = 1;
const multiplicationDivisor = n => {
    for (let i = 1; i <= n; i++) {
        n % i == 0 ? total *= i : '';
    }
    console.log(n + " có tích các ước số là : " + total);
}

function multiplicationDivisor(n) {
    for (let i = 1; i <= n; i++) {
        n % i == 0 ? total *= i : '';
    }
    console.log(n + " có tích các ước số là : " + total);
}
multiplicationDivisor(10);