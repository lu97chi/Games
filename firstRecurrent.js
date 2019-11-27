// not done
function firstRecurrent(arrayNumbers) {
    const mapedNumbers = {}
    for (let i = 0; i < arrayNumbers.length; i+=1) {
        if (!mapedNumbers[arrayNumbers[i]]) {
            mapedNumbers[arrayNumbers[i]] = true;
        } else {
            return arrayNumbers[i];
        }
    }
}