function numObj(s){
    let newArr = []
    s.map(function(item, index, array) {
     newArr.push({[item]:String.fromCharCode(item)})
    });
    return newArr
}