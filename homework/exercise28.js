let total = 0;
const sumDivisor = n => {
    for (let i = 1; i < n; i++) {
        n % i == 0 ? total += i : '';
    }
    console.log("Tổng các ước số của " + n + " nhỏ hơn " + n + " là :" + total);
}

function sumDivisor(n) {
    for (let i = 1; i < n; i++) {
        n % i == 0 ? total += i : '';
    }
    console.log("Tổng các ước số của " + n + " nhỏ hơn " + n + " là :" + total);
}
sumDivisor(10);