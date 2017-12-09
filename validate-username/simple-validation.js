function validateUsr(username) {
  res =  /^([a-z\d_]){4,16}$/g.test(username) 
  return res
}