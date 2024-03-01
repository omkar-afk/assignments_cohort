const fs = require("fs")


function process(data){
    let arr = []
    let word = ""
    for(let i=0;i<data.length;i++){
        if(data[i]!= ' '){
            word += data[i]
        }else{
            if(word != ''){ 
                arr.push(word)
            }
            word = ""

        }
    }
    let final = ""
    for(let i=0;i<arr.length;i++){
        final+=arr[i]
        final+=' ';
    }
    return final


}


fs.readFile('a.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        fs.writeFile('a.txt',process(data),(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("successfully written")
            }
        })
        
    }
})