// buble each element of the list
// [1,4,3,2] -> [1,4,3,2] -> [1,4,2,3] -> [1,4,2,3] -> [1,2,4,3] -> [1,2,3,4]
const numbers = [4,21,521,23,4512,4321,4321,51,35,12,3,512,2];

function bubbleSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j< numbers.length; j++) {
            if (numbers[j] > numbers[j + 1]) {
                const temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
} 

bubbleSort(numbers);
console.log(numbers);