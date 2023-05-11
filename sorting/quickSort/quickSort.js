function pivot(arr, start=0, end=arr.length){
    let swapindex = start
    let pivot = arr[start]
    for(i= start+ 1 ; i< arr.length; i++){
        if(pivot > arr[i]){
            swapindex++
            [arr[swapindex], arr[i]] = [arr[i], arr[swapindex]]
        }
    }
    [arr[start], arr[swapindex]] = [arr[swapindex], arr[start]]
return swapindex
}


function quickSort (arr, left = 0, right = arr.length-1){

    
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1 )
    quickSort(arr, pivotIndex + 1, right)
    }
    return arr



}


 
let result = quickSort([23,465,1,5,3,6,4,33,72])
console.log(result)