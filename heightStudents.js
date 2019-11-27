// Answer all questions
// You are given an array A representing heights of students. All the students are asked to stand in rows. 
// The students arrive by one, sequentially (as their heights appear in A). For the i-th student, if there is a 
// row in which all the students are taller than A[i], the student will stand in one of such rows. If there is no 
// such row, the student will create a new row. Your task is to find the minimum number of rows created.


// Write a function that, given a non-empty array A containing N integers, denoting the heights of the students, returns the minimum number of rows created.


// For example, given A = [5, 4, 3, 6, 1], the function should return 2.


// Students will arrive in sequential order from A[0] to A[N−1]. So, the first student will have height = 5, 
// the second student will have height = 4, and so on.


// For the first student, there is no row, so the student will create a new row.


// Row1 = [5]

// For the second student, all the students in Row1 have height greater than 4. So, the student will stand in Row1.


// Row1 = [5, 4]

// Similarly, for the third student, all the students in Row1 have height greater than 3. So, the student will stand in Row1.


// Row1 = [5, 4, 3]

// For the fourth student, there is no row in which all the students have height greater than 6. So, the student will create a new row.


// Row1 = [5, 4, 3]

// Row2 = [6]

// For the fifth student, all the students in Row1 and Row2 have height greate

function solution(A) {
    let lists = 0;
    const storeLists = {};
    for (let i = 0; i < A.length; i+=1){
      if(i===0){
        lists += 1;
        storeLists[lists] = [];
        storeLists[lists].push(A[i]);
      } else {
            if(A[i] < storeLists[lists][storeLists[lists].length - 1]) {
                storeLists[lists].push(A[i]);
            } else {
                lists += 1;
                storeLists[lists] = [];
                storeLists[lists].push(A[i]);
            }
        }  
    }
    return lists;
  }

console.log(solution([5,4,3,6,1]));