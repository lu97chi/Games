function FirstReverse(str) { 
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i --) {
    reverse += str[i];
  }
  return reverse
}
   
// keep this function call here 
FirstReverse('puto')