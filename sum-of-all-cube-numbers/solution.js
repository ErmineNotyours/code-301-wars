function cubeOdd(arr) {

    for (var i = 0; i < arr.length; i++){
      if (isNaN(arr[i])){
      return undefined;
      }
    }
    const cube = arr.map(x => Math.pow(x, 3));  
    let filtered = cube.filter(x => (x % 2));
    let result = filtered.reduce((total, filtered) => total + filtered, 0);
    
    return result;
    }