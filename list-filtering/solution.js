function filter_list(l) {
  let result = l.filter(l => Number.isInteger(l));
  return result
}