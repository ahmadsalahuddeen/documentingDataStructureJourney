
function selectionSort(arr){
    for(i=1; i<arr.length; i++){
    let currentValue = arr[i]
        for(j= i-1 ; j>= 0 && arr[j]> currentValue; j--){
arr[j+1]= arr[j]
        }
   
arr[j+1]= currentValue
    }
    return arr
    }
    
    console.log(selectionSort([2,3,452,2,54,23,3, 4,345, 23,1,423]))