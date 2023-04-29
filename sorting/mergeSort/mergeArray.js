let arr1 = [999,3,1,56,23,23,9]
let arr2 = [31,11,456,3,2,18,56,22]

function mergeArray(arr1, arr2){

let i =0
let j=0
let sortedArray = []
   while(i< arr1.length && j < arr2.length){
    if (arr1[i]<arr2[j]) {
        sortedArray.push(arr1[i])
        i++
    }else{
sortedArray.push(arr2[j])
j++
    }

   }
  while(i < arr1.length){
    sortedArray.push(arr1[i])
    i++
  }
  while(j < arr2.length){
    sortedArray.push(arr2[j])
    j++
  }
  return sortedArray;

}



let result = mergeArray(arr1, arr2)
console.log(result)