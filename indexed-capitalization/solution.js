function capitalize(s,arr){
  var newString = '';
  
  for (i = 0; i <= s.length;i++){ //Whoops, I forgot to declare i
    if (arr.includes(i)){
      newString += s.charAt(i).toUpperCase();
    } else {
      newString += s.charAt(i);
    }
  }
  return newString;
};