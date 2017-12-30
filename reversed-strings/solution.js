function solution(str){
    var rts = '';
    for (var i = 0; i <= (str.length + 1); i++){
      rts += str.charAt(str.length - i);
    }
    return rts
  }