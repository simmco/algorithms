const selectionSort = function(arr) {
  const newArray = [];
  for (i = 0; i < arr.length; i++) {
    let lowest = arr[0];
    let position = 0;
    for (j = 0; j < arr.length; j++) {
      if (arr[j] < lowest) {
        lowest = arr[j];
        position = j;
      }
    }
    newArray.push(lowest);
  }
  return newArray;
};

selectionSort([2, 5, 1, 6, 4]);
