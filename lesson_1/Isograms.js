function isIsogram(str){
    let myarr = str.toLowerCase().split('');
    let result =  myarr.filter((item, index) => myarr.indexOf(item) !== index)
    
    return result.length == 0 ? true : false   
}