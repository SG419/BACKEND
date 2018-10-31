function downloadPromise(){
    return new Promise(function(resolve,reject){
        console.log("Starting to download file")
        setTimeout (function(){
            console.log("download is complete")
            resolve();
        },3000)


    })
}
let downloadfile=downloadPromise()
setTimeout (function(){
    downloadfile.then(function()
    {console.log("AFTER DOWNLOAD")
    resolve();})

},5000)
