
let maxOddDivisor = 1;
const oddDivisor = n => {
    for (let i = 1; i <= n; i++) {
        n % i == 0 && i > maxOddDivisor && i % 2 != 0 ? maxOddDivisor = i : '';
    }
    console.log(maxOddDivisor);
}

function oddDivisor(n) {
    for (let i = 1; i <= n; i++) {
        n % i == 0 && i > maxOddDivisor && i % 2 != 0 ? maxOddDivisor = i : '';
    }
    console.log(maxOddDivisor);
}
oddDivisor(100);