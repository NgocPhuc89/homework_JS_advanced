
let total = 1;
const oddDivisor = n => {
    for (let i = 1; i <= n; i++) {
        n % i == 0 && i % 2 != 0 ? total *= i : '';
    }
    console.log("Tích các ước số lẻ của " + n + " là " + total);
}

function oddDivisor(n) {
    for (let i = 1; i <= n; i++) {
        n % i == 0 && i % 2 != 0 ? total *= i : '';
    }
    console.log("Tích các ước số lẻ của " + n + " là " + total);
}
oddDivisor(15);