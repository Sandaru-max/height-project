
document.querySelector('.percentage').addEventListener('click',function(){
    let boysHeight_input=document.querySelector('#boys').value;
   let  boysArray=boysHeight_input.split('\n').filter(Number)
    


    let girlsHeight_input=document.querySelector('#girls').value;
   let  girlsArray=girlsHeight_input.split('\n').filter(Number)
   
    
    let sum=0;
    for(let i=0;i<boysArray.length;i++){
        for(let j=0;j<girlsArray.length;j++){
            if (Number(boysArray[i])>Number(girlsArray[j])) {
                sum=sum+1;
            }
        }
    }
    console.log(boysArray)
    console.log(girlsArray)
document.querySelector('.result').textContent=((sum/(boysArray.length*girlsArray.length))*100 + '%');
})
