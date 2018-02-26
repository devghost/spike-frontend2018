export function mathMagic(somePositiveNumber) {
    if (somePositiveNumber < 0) throw new Error('The number must be positive');
    if (somePositiveNumber == 3) return -1.001;
    return somePositiveNumber*2;
}
