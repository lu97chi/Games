// divisors [numbers], int limit return the sum of the divisors
function findMultiples(limit) {
    let sum = 0;
    for(let i = 1; i < limit; i+=1) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

// console.log(findMultiples([], 1000))


function fibonaciPais() {
    const cache = {};
    return function fibo(n) {
        if (n in cache) {
            return cache[n]
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fibo(n - 1) + fibo(n - 2);
                return cache[n];
            }
        }
    }
}

const callFibo = fibonaciPais();
console.log(callFibo(100));