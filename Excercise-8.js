function doubleNumbers(numbers) {
    return numbers.map(function(number){
        return number * 2
    });
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers);

console.log(doubledNumbers);