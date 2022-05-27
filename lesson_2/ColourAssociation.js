function colourAssociation(array){
    return Object.assign(array.map(item => ({[item[0]]: item[1]})))
}