const getLargestNumber = (a,b)=>{
    if(a > b){
        return a
    }else{
        return b
    }
}

const data = getLargestNumber(10,5);
console.log(data);