const {readFile,writeFile} = require('fs');


// if no coding we get the buffer
readFile('./contemt/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./contemt/second.txt','utf8',(err,result)=>{
        if (err){
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./contemt/result-async.txt',
        `here is the result ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);

        });

    });


})
