function findShort(s){
    s = s.split(' ').map(item => item.length).sort(function(a, b) { return a - b; }) 
    return s[0]
}