let arrr1 = [31, 11, 456, 3, 2, 18, 56, 22];
let arrr2 = [99, 3, 1, 56, 23, 23, 9];

function mergeArray(arr1, arr2) {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sortedArray.push(arr2[j]);
    j++;
  }
  return sortedArray;
}





function mergeSort (arr){

if(arr.length <= 1) return arr;

let midPoint = Math.floor(arr.length/ 2)
let left = mergeSort( arr.slice(0, midPoint))
let right = mergeSort( arr.slice(midPoint))

return mergeArray(left, right)
}


console.log( mergeSort([2,1,543,12, 311,54,12,5,23,274,4,2]))