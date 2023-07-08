function filterEvenNumbers(numbers) {
    return numbers.filter(function(number){
       return number % 2 === 0
    });
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);

console.log(evenNumbers);