var fs = require('fs');

// Use fs module for all operatins below.


// 1. Write script to read file theory.md and console the output buffer.

fs.readFile("./theory.md" , (err ,data)=>{
  if(err){return console.log(err);}
  console.log(data);
})

// 2. Write script to read file theory.md and convert resulted buffer using toString
  // method and console the result.

  fs.readFile("./theory.md" , (err ,data)=>{
    if(err){return console.log(err);}
    console.log(data.toString());
  })


// 3. Write script to read file Synchronously and console the output.

let data =fs.readFileSync('./theory.md' );
 console.log(data.toString());

// 4. Write script to create a file 'write.js' and write content of read.js in there.

fs.open(__dirname+'/write.js', 'wx' ,  (err , fd)=>{
  if(err){return console.log(err);}
  console.log(fd);
  fs.readFile("./read.js" , 'utf8' ,(err , data)=>{
   if(err){return console.log(err);}
   fs.writeFile(__dirname+"/write.js" , data ,(err)=>{
     if(err){console.log(err)};
   }) 
  })
})


// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
//   - open the file(write.js) using fs.open
//   - remove earlier content using fs.ftruncate
//   - add new content using fs.writeFile
//   - close the file at last using fs.close

fs.open(__dirname + "/write.js" , 'r+' , (err,fd)=>{
  if(err){return console.log(err);}
  fs.ftruncate(fd , (err)=>{
    if(err){return console.log(err);}
   fs.readFile(__dirname +"/theory.md" , 'utf8' , (err , data)=>{
     if(err){return console.log(err);}
     fs.writeFile(__dirname +"/write.js" , data , (err)=>{
       if(err){return console.log(err);}
      fs.close(fd , (err)=>{
        if(err){console.log(err);}
        console.log('all done');
      })   
     })
   })
  })
})

// 6. Delete the content of write.js using fs.unlink or unlinkSync method

fs.unlink(__dirname + "/write.js" , (err)=>{
  if(err){return console.log(err);}
  console.log('write.js file deleted');
})
