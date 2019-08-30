function high(x){
    var j = 0;
    var total = [0];
    var totalWord = [''];
    
    for (var i=0; i < x.length; i++) {
      
        if (x.charCodeAt(i) == 32) { // If a space is encountered
            j++;
            total[j] = 0;
            totalWord[j] = '';
        } else {
            total[j] = total[j] + x.charCodeAt(i) - 96;
            totalWord[j] = totalWord[j] + x.charAt(i);
        }
    }

    var highestScore = Math.max(...total);
    var result = total.indexOf(highestScore);
    return totalWord[result];   
}