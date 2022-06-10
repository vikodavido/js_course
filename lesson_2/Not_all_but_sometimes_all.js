function remove(str, what) {
    let arr = str.split('')
    
    let arr2 = arr.filter(function(item, index) { 
       if(item in what && what[item] !== 0) {
          what[item]--
         return false
       }
      return true
    })
    str = arr2.join('')
    
    return str
}