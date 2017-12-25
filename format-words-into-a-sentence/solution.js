function formatWords(words){
    if (words === '') {
      return '';
    }
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