function solution(T) {
    let payload = '';

    if (T[0] === '?' || T[1] === '?') {
        if (T[1] === '?') {
            payload += '23:';
        } else {
            if (T[1] > 3) {
                payload += `1${T[1]}:`;
            } else {
                payload += `2${T[1]}:`;
            }
        }
    } else {
        payload += `${T[0]}${T[1]}`;
    }
    if (T[3] === '?') {
        payload += 5;
    } else {
        payload += T[3]
    }
    if (T[4] === '?') {
        payload += 9;
    } else {
        payload += T[4]
    }
    return payload;
  }

  console.log(solution('2?:?8'));