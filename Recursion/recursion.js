// a recersive function to countdown and log the number


const countDown = (number) =>{
    if (number <=  0) {
        console.log('All is done')
        return;
    }    
    console.log(number);
    number--;
    countDown(number)    
   

    

}

countDown(10)