function flat(arr, depth = 1) {
    // your imeplementation here
     return depth > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val, depth - 1) : val), []) : arr.slice();
  }
  