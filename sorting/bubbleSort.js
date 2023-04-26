
function bubbleSort(arr){
let noSwap;

for(i=arr.length -1 ; i>0 ; i--){
    noSwap = true

    for(j=0; j<=i-1; j++){
        if(arr[j]>arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            noSwap= false 
        }
    }
    if(noSwap) break;
}

return arr;
}



bubbleSort([12, 32, 54,1, 43, 6,18]) // <-------------------INVOKING THE FUNCTION

