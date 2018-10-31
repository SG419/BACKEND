function someasyntask(callback){
    console.log("Begining of task");
    setTimeout(function(){
        console.log("End of task");
        callback();
    },3000)
}

    let sometaskpromise=function(){
        return new Promise(function(resolve,reject){
         someasyntask(resolve)
        })
    }

    sometaskpromise()
    .then(function(){
        console.log("AFTER SOME TASK")
    })

