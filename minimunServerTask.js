// There are some processes that need to be executed. Amount of a load that process causes on a server that runs it, 
// is being represented by a single integer. Total load caused on a server is the sum of the loads of all the processes 
// that run on that server. You have at your disposal two servers, on which mentioned processes can be run. Your goal is 
// to distribute given processes between those two servers in the way that, absolute difference of their loads will be minimized.



// Write a function that, given an array A of N integers, of which represents loads caused by successive processes, 
// the function should return the minimum absolute difference of server loads.



// For example, given array A such that:

//   A[0] = 1

//   A[1] = 2

//   A[2] = 3

//   A[3] = 4

//   A[4] = 5



// your function should return 1. We can distribute the processes with loads 1, 2, 4 to the first server and 3, 5 
// to the second one, so that their total loads will be 7 and 8, respectively, and the difference of their loads will be equal to 1.


// Assume that:

// N is an integer within the range [1..1,000]

// the sum of the elements of array A does not exceed 100,000


// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
function solution(A) {
    const serversTasks = {
      A : 0
    };
    const serversNumbers = {
      A: [],
      B: [],
    };
    let acumulativeSum = 0;
    for (let i = 0; i < A.length; i += 1){
      acumulativeSum += A[i];
    }
    if (acumulativeSum % 2 === 0){
      serversTasks.A = acumulativeSum / 2;
    } else {
      let auxNumber = acumulativeSum + 1;
      serversTasks.A = auxNumber / 2;
    }
    const optimisticArray = getToGoal();
    const firstServer = optimisticArray(A, serversTasks.A);

    console.length(firstServer);
  return 0;
}

// [1,2,3,4,5] -> get to 7 how ?

// recorre el arreglo, si no encuentras el goal, restale el indice 0 al goal y el numero que restaste guardalo en un arreglo
// si lo encuentras, guarda el numero en el arreglo y regresa el arreglo

function getToGoal() {
    const numbers = [];
    let pivot = 0;
    return function recursiveGoal(nums, target) {
        for (let i = 0; i < nums.length; i+=1 ) {
            if (nums[i] === target) {
              numbers.push(nums[i]);
              return numbers;
            } else if (i === nums.length - 1) {
              let auxNumber = target - nums[pivot];
              numbers.push(nums[pivot]);
              pivot += 1;
              recursiveGoal(nums, auxNumber);
            } else continue;
            return numbers;
        }
    }
}

// const result = getToGoal();
// console.log(result([1,2,3,4,5], 7));
console.log(solution([1,2,3,4,5]));