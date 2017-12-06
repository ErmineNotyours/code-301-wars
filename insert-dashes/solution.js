function insertDash(num) {
    let strNum = num.toString();
        if (strNum.length > 1) {
            for (let i = 0; i < (strNum.length - 1); i++) {
                console.log(i);
                if (strNum[i] == 1 || strNum[i] == 3 || strNum[i] == 5 || strNum[i] == 7 || strNum[i] == 9) {
                  if (strNum[i+1] == 1 || strNum[i+1] == 3 || strNum[i+1] == 5 || strNum[i+1] == 7 || strNum[i+1] == 9) {
                    strNum = strNum.slice(0, i+1) + "-" + strNum.slice(i+1);
                  }
                }
            }
        }
    return strNum;
 }