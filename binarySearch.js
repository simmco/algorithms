function binarySearch (list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = list[mid]

    // console.log('low: ' + low)
    // console.log('high: ' + high)
    // console.log('mid: ' + mid)
    // console.log('guess: ' + guess)

    if(guess === item) {
      return mid
    }
    if (guess > item) {
      high = mid - 1
    }
    else {
      low = mid + 1
    }
  }
  return null
}

myList = [1, 3, 5, 7, 9]

console.log('position in array: ' + binarySearch(myList, 3))
console.log(binarySearch(myList, -1))