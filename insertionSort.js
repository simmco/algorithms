var insertionSort = function(array, comparator) {
  comparator = comparator || defaultComparator;

  // start at index 1 as sublist of array[0] is already sorted
  for (var index = 1; index < array.length; index++) {
    var value = array[index];
    var compareIndex = index - 1;
    // swap with left element while < value
    while (compareIndex > -1 && comparator(array[compareIndex], value) > 0) {
      array = swap(array, compareIndex, index);
      index = compareIndex;
      compareIndex--;
    }
  }
  return array;
};

function defaultComparator(a, b) {
  if (a < b) return -1;
  else if (a > b)
    // a comes first
    return 1; // b comes first
  return 0;
}

function swap(arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}
