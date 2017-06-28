function mergeSort(leftPart, rightPart) {
  var i = 0;
  var j = 0;
  var results = [];

  while (i < leftPart.length || j < rightPart.length) {
    if (i === leftPart.length) {
      // j is the only index leftPart
      results.push(rightPart[j]);
      j++;
    } else if (j === rightPart.length || leftPart[i] <= rightPart[j]) {
      results.push(leftPart[i]);
      i++;
    } else {
      results.push(rightPart[j]);
      j++;
    }
  }
  return results;
}

console.log(mergeSort([1, 3, 4], [3, 7, 9]));
