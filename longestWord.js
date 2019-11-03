function LongestWord(sen) { 
    let biggestWord = "";
    let auxWord = "";
    for(let i = 0; i < sen.length; i += 1) {
        if (sen[i] === " ") {
            auxWord = ''
        } else {
            if (sen[i].match(/^[A-Za-z0-9]+$/)) {
                auxWord += sen[i]
            } else {
                auxWord = ''
            }
        }
        if (auxWord.length > biggestWord.length) {
            biggestWord = auxWord;
        }
    }
    return biggestWord; 
  }
     
  // keep this function call here 
  console.log(LongestWord('a b c dee'));