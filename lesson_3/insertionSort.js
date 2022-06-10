function insertionSort(arr) {
  // your code here
  let x = arr.length;
        for (let i = 1; i < x; i++) {
            let cur = arr[i];
            let y = i-1; 
            while ((y > -1) && (cur < arr[y])) {
                arr[y+1] = arr[y];
                y--;
            }
            arr[y+1] = cur;
        }
}