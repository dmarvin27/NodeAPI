var http = require("http");
var constituent = require("../controllers/constituent");
var settings = require("../settings");
var httpMsgs = require("./httpMsgs");

http.createServer(function (req, resp) {
    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                resp.write("Maging Number 1 sa JAPAN");
                resp.end();
            }
            else if (req.url === "/constituent") {
                constituent.getList(req,resp);
            }
            break;
        case "POST":
            if (req.url === "/constituent") {
              var reqBody = '';
              req.on("data", function (data) {
                  reqBody += data;
                  if (reqBody.length > 1e7) {
                      httpMsgs.show413(req, resp);
                  }
              });

              req.on("end", function () {
                constituent.add(req,resp,reqBody);
              });
            }
            break;
        case "PUT":
            break;
        case "DELETE":
            break;
        default:
            httpMsgs.show405(req,resp);
            break;
    }
}).listen(settings.webPort, function () {
    console.log("started listening at:" + settings.webPort);
});