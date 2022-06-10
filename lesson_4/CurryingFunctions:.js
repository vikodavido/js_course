function multiplyAll(arr) {
    let newArr = []
    return function(x) {
        return newArr = arr.map(item => item * x)
    }
}