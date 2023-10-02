
const listDivisor = n => {
    for (let i = 1; i <= n; i++) {
        n % i == 0 ? console.log(i + " là ước số của " + n) : ''
    }
}

function listDivisor(n) {
    for (let i = 1; i <= n; i++) {
        n % i == 0 ? console.log(i + " là ước số của " + n) : ''
    }
}
listDivisor(10); 