
function fibonacci() {
    let cache = {};
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

const callfibo = fibonacci();

console.log(callfibo(10));