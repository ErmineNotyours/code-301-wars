function mutateMyStrings(stringOne, stringTwo){
    var newString = stringOne + '\n';
    var candidate = stringOne;
    var newCandidate;
    
    for (var i=1; i <= stringOne.length; i++) {
            newCandidate = stringTwo.substring(-1 * stringOne.length, i) + stringOne.substring(i);
            if (candidate != newCandidate){
              newString += newCandidate + '\n';
              candidate = newCandidate;
            }
        }
    return newString;
    }
