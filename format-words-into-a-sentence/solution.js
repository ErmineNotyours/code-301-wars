function formatWords(words){
  if (!words || words.length == 0 || (words.length == 1 && words[0] == "")) {
  let word = "";
    return word
  }
  
for(var i = words.length - 1; i >= 0; i--) {
if(words[i] === '') {
    words.splice(i, 1);
  }
} // next i
    
var word = words[0];
if (words.length > 1){
  for (var i = 1; i < words.length; i++){
    if (i == (words.length - 1)) {
      word = word + " and " + words[i];
      } else {
        word = word + ", " + words[i];
      }
    }
  
  }
  return word
}