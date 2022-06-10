function firstDuplicate(str) {
    // your code here
  
    let arr = str.split('')
    let x
    if (arr.length == 0) {
        x = null 
    } 
    for ( let i = 0; i < arr.length; i++){
        if (arr.indexOf(arr[i]) !== i) {
            x = arr[i]
            break
        } else {
            x = NaN
        }
    };
    console.log(x);    
}  

firstDuplicate('abcanba')
