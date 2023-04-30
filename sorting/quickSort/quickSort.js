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
return arr


}

console.log( pivot([99,1,5,6,2,67,34,3]))