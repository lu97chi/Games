/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

/**
    numbers in array1 and array2 positive and less than 1000
    each element in array2 is diferent
    each element in array2 is also in array1
    
    output will be the join of the two arrays in relative order
    so...
    arra1 = [1,4,6,12,13,19,20,21]
    arra2 = [4,12,6,1,13]
    payload = [4,4,12,12,6,6,1,1,13,13,19,20,21]
    
    if is empty array 2?
    
    iterate over array2
    the array[i] defines the output 
    so..
    make a hash table with the numbers of array1, 
    it must contain how many times its repeated
    when i found one i put it the times the value says
    for the ones that isnt on array2
    iterate over the keys of the hastTable, find the ones that doesnt
    are in array2, push them to an array,
    sort them and finaly push to the payload array
*/
var relativeSortArray = function(arr1, arr2) {
    const hashArray1 = {};
    let payload = [];
    let auxArray = [];
    for (let i =0; i< arr1.length; i+=1) {
        if (!hashArray1[arr1[i]]) {
            hashArray1[arr1[i]] = 1;
        } else {
            hashArray1[arr1[i]] += 1;
        }
    }
    for (let i = 0; i < arr2.length; i+=1) {
        if (hashArray1[arr2[i]]) {
            while(hashArray1[arr2[i]] > 0) {
                payload.push(arr2[i]);
                hashArray1[arr2[i]] -= 1;
            } 
        }
    }
    Object.keys(hashArray1).forEach((key) => {
        if (hashArray1[key] > 0) {
            while(hashArray1[key] > 0) {
                auxArray.push(parseInt(key));
                hashArray1[key] -= 1;
            }
        }
    })
    payload = payload.concat(auxArray);
    return payload;
};