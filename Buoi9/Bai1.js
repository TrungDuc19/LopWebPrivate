const isPrime = (number) => {
    if (number == 2) return true;
    if (number < 2 || number % 2 == 0) return false;
    for (let i = 3; i < number; i++) {
        if (number % i == 0) return false;
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));