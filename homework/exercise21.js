let total = 0;
const sumDivisor = n => {
    for (let i = 1; i <= n; i++) {
        n % i == 0 ? total += i : '';
    }
    console.log(n + " có tổng các ước số là : " + total);
}

function sumDivisor(n) {
    for (let i = 1; i <= n; i++) {
        n % i == 0 ? total += i : '';
    }
    console.log(n + " có tổng các ước số là : " + total);
}
sumDivisor(20);