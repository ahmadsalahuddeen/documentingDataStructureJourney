function pivot(arr, start=0, end=arr.length){
    let swapindex = start
    let pivot = arr[start]
    for(i= start+ 1 ; i< arr.length; i++){
        if(pivot > arr[i]){
            swapindex++
            [arr[swapindex], arr[i]] = [arr[i], arr[swapindex]]
        }
    }
    [arr[start], arr[swapindex]] = [arr[i], arr[swapindex]]
return swapindex
}


function quickSort (arr, left=0, right= arr.length){
    
}