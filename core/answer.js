7. // Write respective headers object below.

8. // Write parsed object below of the url ``http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4

let localUrl = 'http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4&r=8'
let url = require('url');
let urlObj = url.parse(localUrl);
// console.log(urlObj);


9. // Write parsed query object
  let parseUrl = url.parse(localUrl , true);
  let parseQueryObj = parseUrl.query ;
  console.log(parseQueryObj);
  console.log(parseQueryObj.token);
