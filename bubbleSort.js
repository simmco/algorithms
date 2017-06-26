const bubbleSort = function(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        var a = arr[i];
        var b = arr[j];
        arr[i] = b;
        arr[j] = a;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([2, 5, 3, 6, 9, 1]));
