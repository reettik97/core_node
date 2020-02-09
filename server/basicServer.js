var http = require('http');

// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.

http.createServer((req , res)=>{
  res.write('<h1>Welcome to NodeJS</h1>');
  req.end();
}).listen(5555,()=>console.log("server started"))


// 2. Write script to create a server, send in response the request headers 
// and add listener on port 6666.

http.createServer((req , res)=>{
  res.setHeader('content-type' , 'text/text');
  res.write('Welcome to NodeJS');
  req.end();
}).listen(6666,()=>console.log("server started"))

// 3. create a server and console request methods and url by doing request 
// from postman or web browsers.

http.createServer((req , res)=>{
  console.log(req.url);
  console.log(req.method);
  res.end();
}).listen(3001 , ()=>console.log("server started"))

// 4. create a server
  // - set response headers as 'text/html' using res.setHeader property.
  // - write some HTML content in response
  // - listen on port 6000

  http.createServer((req , res)=>{
    res.setHeader('content-type' , "text/html")
    res.write('<h2>my name is Reettik Goswami</h2>')
    res.end();
 }).listen(6000,()=>console.log("server started"))

// 5. create a server
  // - create a seperate file index.html and write some html content
  // - read the html file content and send it in response in createServer method
  // - don't forget to set header before writing to response

  let fs = require('fs');
http.createServer((req , res)=>{
   res.setHeader("content-type" , 'text/html')
   fs.createReadStream('./index.html').pipe(res);
}).listen(3001 , ()=>console.log("server started"))


// 6. create a server
  // - create 3 diffenrent file ie. indx.html, about.html, contact.html
  // - inside createServer, handle different urls for serving different html file
  // - '/' route for index.html file
  // - "/about" for about.html file
  // - "/contact" for contact.html file

  http.createServer((req , res)=>{
    res.setHeader('content-type' , 'text/html');
    if(req.url=="/" || req.url == "/index"){
       fs.createReadStream('./index.html').pipe(res);
    }else if(req.url == '/about'){
      fs.createReadStream('./about.html' ).pipe(res);
    }else if(req.url == '/contact'){
      fs.createReadStream('./contact.html').pipe(res);
    }else{
      res.write('<h2>page not found</h2>')
      res.end();
    }
 }).listen(3001 , ()=>console.log("server started"))


// 7. create an Server(echoServer)
  // handle post request for incoming data from postman using req as eventEmitter
  // send incoming data back in response


let server = http.createServer();
server.on('request' , (req , res)=>{
  let store = '';
  req.on('data' ,(chunk)=>{
    store += chunk;
  })
  req.on('end' , ()=>{
    res.end(store);
  })
})
server.listen(3001 , ()=>console.log('server started'));


// 8. create a server
  // handle json data from postman
  // parse the json data
  // send json data back in response

let server = http.createServer();
server.on('request' , (req , res)=>{
  let store = '';
  req.on('data' ,(chunk)=>{
    store += chunk;
  })
  req.on('end' , ()=>{
   console.log(JSON.parse(store));
    res.end(store);
  })
})
server.listen(3001,()=>console.log('server started'));


// 9. create a server
  // handle x-www-urlencoded(form data) coming form postman
  // parse form-data using querystring module
  // send data back in response




// 10. create a server and add listener on port 7000
  // send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
  // parse the request url using 'url' core node module
  // extract protocol, path and pathname, query from the request
  // send path in response

let server = http.createServer();
let url = require('url');
server.on('request' , (req,res)=>{
  let store = '';
  let parseUrl = url.parse(req.url);
  console.log(parseUrl);
  req.on('data' ,(chunk)=>{
    store += chunk;
  })
  req.on('end' , ()=>{
    let protocal = parseUrl.protocol;
    let path = parseUrl.path;
    let pathName = parseUrl.pathname;
    let query = parseUrl.query;
    console.log(protocal +'\n'+ path +'\n'+ pathName +'\n'+ query);
    res.end(parseUrl.path);
  })
})
server.listen(3001,()=>console.log('server started'));


// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
  // use path module from core node


