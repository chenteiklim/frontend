const checkString=(str)=>{
    return new Promise((resolve,reject)=>{
        if (typeof(str)==='string'){
            resolve('It is a string')
        }
        else{
            reject('It is not a string')
        }
    })
}
checkString('abssa')
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})