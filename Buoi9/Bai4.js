const countEvenNumberOfDigits = number => {
    let cnt = 0;
    while (number) {
        cnt += (number & 1);
        number /= 10;
    }
    return cnt;
}

console.log(countEvenNumberOfDigits(12345));
console.log(countEvenNumberOfDigits(11111112));
console.log(countEvenNumberOfDigits(22222222));