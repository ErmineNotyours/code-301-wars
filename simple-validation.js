function validateUsr(username) {
    res =  /([a-z0-9_])(\w+){4,16}/g.test(username) 
    return res
  }