
function selectionSort(arr){
for(i=0; i<arr.length; i++){
let lowest = i
    for(j=i+1; j<arr.length; j++){
if(arr[lowest]> arr[j]) lowest = j;
    
}
if(arr[lowest] !== arr[i]) {
    [arr[lowest], arr[i]] = [arr[i], arr[lowest]]
}

}
return arr
}

console.log(selectionSort([2,3,452,2,54,23,3, 4,345, 23,1,423]))