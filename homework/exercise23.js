let count = 0;

const countDivisor = n => {
    for (let i = 1; i <= n; i++) {
        n % i == 0 ? count++ : '';
    }
    console.log("Số " + n + " có " + count + " ước số ");
}

function countDivisor(n) {
    for (let i = 1; i <= n; i++) {
        n % i == 0 ? count++ : '';
    }
    console.log("Số " + n + " có " + count + " ước số ");
}
countDivisor(20);