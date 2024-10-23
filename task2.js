function isDivisibleBy100(num) {
    return num % 100 === 0;
}

// Beispiele
console.log(isDivisibleBy100(1));    // ➞ false
console.log(isDivisibleBy100(1000)); // ➞ true
console.log(isDivisibleBy100(100));  // ➞ true
