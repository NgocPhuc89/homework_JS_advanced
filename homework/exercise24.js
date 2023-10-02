

const oddDivisor = n => {
    for (let i = 1; i <= n; i++) {
        n % i == 0 && i % 2 != 0 ? console.log(i + " là ước lẻ của " + n) : '';
    }
}

function oddDivisor(n) {
    for (let i = 1; i <= n; i++) {
        n % i == 0 && i % 2 != 0 ? console.log(i + " là ước lẻ của " + n) : '';
    }
}

oddDivisor(33);