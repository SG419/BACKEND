function download(url){
    return new Promise(function(resolve,reject){
        if(!url.startsWith("http"))
    {
        reject (new error("URL DOES NOT START WITH HTTP"))
    } else{

       console.log("Start Download"+url)
        setTimeout(function(){

            let filename=url.split("/").pop()
            resolve(filename)
        },3000)
    }
})
}

function resize(filename){
return new Promise(function(resolve,reject){

    if(!filename.endsWith(".png")){
        reject (new error("FILE IS NOT PNG "))
    }
    else{
        console.log("Start Resize"+ filename)

        setTimeout(function(){

            let resizedfile=filename.split(".")[0]+ " resized file"
           resolve(resizedfile)
       
        },3000)
    }
})
}

function upload(resizefilename){
    return new Promise(function(resolve,reject){
        console.log("Start Upload"+resizefilename)

        setTimeout(function(){

            let uploadedurl="http://imgur.com/"+  resizefilename
           resolve(uploadedurl)
       
        },3000)
        })
    }


download('http://cb.lk/logo.png')
.then(resize)
.then(upload)
.then(function(uploadedurl){
    console.log("File was uploaded to  :" + uploadedurl)
   
    })
   
    .catch(function(err){
      console.log("shubham")
      console.error(err)
    })
