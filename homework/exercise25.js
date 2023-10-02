
let total = 0;
const evenDivisor = n => {
    for (let i = 1; i <= n; i++) {
        n % i == 0 && i % 2 == 0 ? total += i : '';
    }
    console.log("Tổng các ước số chẳn của " + n + " là " + total);
}

function evenDivisor(n) {
    for (let i = 1; i <= n; i++) {
        n % i == 0 && i % 2 == 0 ? total += i : '';
    }
    console.log("Tổng các ước số chẳn của " + n + " là " + total);
}
evenDivisor(33);