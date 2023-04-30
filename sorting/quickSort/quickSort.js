function pivot(arr, start=0, end=arr.length){
let pivot = arr[start]
let swapIndex = start

for(i = start+1; i< arr.length; i++){
    if(pivot> arr[i]){
        swapIndex++
        [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
    }
}
[arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
return swapIndex;


}




function quickSort( arr, left= 0, right = arr.length-1){
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex-1)
        quickSort(arr,  pivotIndex+1, right)
        
    }
    return arr;
}

console.log( quickSort([23, 56,2,1,5,3,32,11, 4,11123,34]))