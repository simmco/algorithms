var selectionSort = function(array, comparator) {
  comparator = comparator || defaultComparator;
  array.forEach(function(element, index) {
    // for each position, find index of minimum value in subarray starting at that positions
    var minValue = element;
    var minIndex = index;
    for (var i = index; i < array.length; i++) {
      if (comparator(array[i], minValue) < 0) {
        minValue = array[i];
        minIndex = i;
      }
    }
    // swap values at min index and current position
    array = swap(array, index, minIndex);
  });
  return array;
};

function swap(arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}

function defaultComparator(a, b) {
  if (a < b) return -1;
  else if (a > b)
    // a comes first
    return 1; // b comes first
  return 0;
}
