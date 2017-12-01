function fixTheMeerkat(arr) {
    let swap = [];
    for (var i = 0; i < arr.length; i++) {
      let tempIndex = (arr.length - i)-1;
      swap.push(arr[tempIndex]);
    }
       return swap;
   }