function convertHashToArray(hash){
  let obj = []
  for(key in hash) {  
    obj.push([key, hash[key]])
  }
  return obj.sort()
}и