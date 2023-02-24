/* Promise */
const checkEven=(n)=>{
    return new Promise((resolve,reject)=>{        
        if (n%2===0){
            resolve('It is an even number') 
        }
        else{
            reject('It is not an even number')
        }
    })
}

checkEven(5)
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.error(error)
})
