function isNice(arr){
    if (arr.length == 0){
      return false
      }
    for (let i = 0; i < arr.length; i++){
      let flag = false;
      for (let j = 0; j < arr.length; j++){
        if (arr[i] == arr[j] + 1 || arr[i] == arr[j] - 1){
          flag = true;
          } // end if
        } // next j
        if (!flag) {
        return false
        } // end if
      } // next i
    return true
  }