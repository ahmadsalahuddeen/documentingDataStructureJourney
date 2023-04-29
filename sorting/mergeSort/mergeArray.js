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
    }else {
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

console.log( mergeArray([1,2 ,3], [4, 6, 7]))

