var querystring = require("querystring");

function start(response, postData) {
  console.log("Request handler 'start' was called");

  var body = 
    '<html>' +
      '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
      '</head>' +
      '<body>' +
        '<form action="upload" method="post">' +
          '<input type="text" name="r"></input>' +
          '<input type="text" name="g"></input>' +
          '<input type="text" name="b"></input>' +
          '<input type="submit" value="Convert RGB to HEX" />' +
        '</form>' +
      '</body>' +
    '</html>';

  response.writeHead(200, {"Content-type" : "text/html"});
  response.write(body);
  response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called");
  response.writeHead(200, {"Content-type" : "text/plain"});
  response.write("You've sent the text: " + 
    "r: " + querystring.parse(postData).r + 
    ", g: " + querystring.parse(postData).g + 
    ", b: " + querystring.parse(postData).b); 
  response.end();
}

exports.start = start;
exports.upload = upload;