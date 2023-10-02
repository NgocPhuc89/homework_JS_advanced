let count = 0;
const countOddDivisor = n => {
    for (let i = 1; i <= n; i++) {
        n % i == 0 && i % 2 == 0 ? count++ : '';
    }
    console.log(n + " có tổng số lượng ước chẳn là : " + count);
}

function countOddDivisor(n) {
    for (let i = 1; i <= n; i++) {
        n % i == 0 && i % 2 == 0 ? count++ : '';
    }
    console.log(n + " có tổng số lượng ước chẳn là : " + count);
}
countOddDivisor(12);