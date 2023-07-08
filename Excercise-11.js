function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
}

const numbers = [5, 2, 8, 1, 9];
const sortedNumbers = sortNumbers(numbers);

console.log(sortedNumbers);