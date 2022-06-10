const myNew = (constructor, ...args) => {
    let obj = new constructor(...args)
    return obj
} 