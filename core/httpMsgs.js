var settings = require("../settings");

exports.show500 = function (req, resp, err) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(500,"Internal Error occured", { "Content-Type" : "text/html" });
        resp.write("<html><head><title>500</title></head><body>500: Internal Error. Details:"+ err +"</body></html>");
    }
    else {
        resp.writeHead(500, "Internal Error occured", { "Content-Type" : "application/json" })
        resp.write(JSON.stringify({ data: "ERROR occured:" + err }));
    }
};

exports.show405 = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(405,"Method not supported", { "Content-Type" : "text/html" });
        resp.write("<html><head><title>405</title></head><body>405: Method not supported. Details:"+ err +"</body></html>");
    }
    else {
        resp.writeHead(405, "Method not supported", { "Content-Type" : "application/json" });
        resp.write(JSON.stringify({ data: "ERROR occured:" + err }));
    }
};

exports.show404 = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(404,"Resource not found", { "Content-Type" : "text/html" });
        resp.write("<html><head><title>404</title></head><body>404: Resource not found. Details:"+ err +"</body></html>");
    }
    else {
        resp.writeHead(404, "Resource not found", { "Content-Type" : "application/json" });
        resp.write(JSON.stringify({ data: "ERROR occured:" + err }));
    }
};

exports.show413 = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(413,"Request Entity too large", { "Content-Type" : "text/html" });
        resp.write("<html><head><title>413</title></head><body>413: Request Entity too large. Details:"+ err +"</body></html>");
    }
    else {
        resp.writeHead(413, "Request Entity too large", { "Content-Type" : "application/json" });        
        resp.write(JSON.stringify({ data: "ERROR occured:" + err }));
    }
};

exports.send200 = function (req, resp) {
    resp.writeHead(200, { "Content-Type" : "application/json" });
    resp.end();
};
