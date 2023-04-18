// a recersive function to countdown and log the number


const countDown = (number) =>{
    if (number >=  0) {
        console.log(number)
      
    }    
     else {
return console.log('All is done')
    }
    number--
    countDown(number)    
   

    

}

countDown(10)