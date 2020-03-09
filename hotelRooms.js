function solution(A) {
    const hotelRoomsBookingCount = {};
    let payload = {};
    for (let i = 0; i < A.length; i+=1){
      const roomStatus = A[i][0];
      const roomNumberLetter = A[i].substr(1);
      if (roomStatus === '+'){
        if (!hotelRoomsBookingCount[roomNumberLetter]) {
          hotelRoomsBookingCount[roomNumberLetter] = 1;
        } else {
          hotelRoomsBookingCount[roomNumberLetter] += 1;
        }
      }
    }
    Object.keys(hotelRoomsBookingCount).map((key, i) => {
        const currentBooking = hotelRoomsBookingCount[key];
        if(i === 0) {
            payload = { key, total: currentBooking }
        } else {
            if (currentBooking > payload.total) {
                payload = { key, total: currentBooking }
            } else if (currentBooking  === payload.total) {
                if (payload.key > key) {
                    payload = { key, total: currentBooking }
                }
            }
        }
    })
    return payload.key;
  }

//   solution(['+1A','-1A','+3F','-3F','+3F','+8X']);
  solution(['+3F','+1A','+8X','-1A','+1A','-3F','-3F','+3F','-3F','+3F','-8X']);