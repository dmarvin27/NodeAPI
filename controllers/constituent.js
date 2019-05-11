var db = require("../core/db");
var httpMsgs = require("../core/httpMsgs");
var util = require("util");

exports.getList = function (req,resp) {
    db.executeSql("select * from ConstituentInformation", function(data, err) {
        if (err) {
            httpMsgs.show500(req,resp,err);
        }
        else {
            resp.writeHead(200,{ "Content-Type" : "application/json" });
            resp.write(JSON.stringify(data));
        }

        resp.end();
    });
};

exports.get = function (req,resp,ConstituentID) {

};

exports.add = function (req, resp, reqBody) {
    try{
        if (!reqBody) throw new Error("Input not valid");
        var data = JSON.parse(reqBody);
        if (data) {
            var sql = "INSERT INTO ConstituentInformation ([FirstName]\
                ,[MiddleName]\
                ,[LastName]\
                ,[Suffix]\
                ,[MothersName]\
                ,[FathersName]\
                ,[Gender]\
                ,[CivilStatus]\
                ,[Birthday]\
                ,[Birthplace]\
                ,[PhoneNumber]\
                ,[Citizenship]\
                ,[Religion]\
                ,[Email])\
                VALUES ";
                sql += util.format("('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')",
                data.FirstName,data.MiddleName,data.LastName,data.Suffix,data.MothersName
                ,data.FathersName,data.Gender,data.CivilStatus,data.Birthday,data.Birthplace
                ,data.PhoneNumber,data.Citizenship,data.Religion,data.Email);
            db.executeSql(sql, function (data,err) {
                if (err) {
                    httpMsgs.show500(req,resp,err);
                }
                else {
                    httpMsgs.send200(req,resp);
                }
            });
        
            }
        else {
            throw new Error("Input not valid");
        }
    }
    catch (ex) {
        httpMsgs.show500(req,resp,ex);
    }
    finally {
        resp.end();
    }
};

exports.update = function (req,resp,reqBody) {
    try{
        if (!reqBody) throw new Error("Input not valid");
        var data = JSON.parse(reqBody);
        if (data) {
            if (!data.ID) 
                throw new Error("Constituent ID is not provided!");
            
            var sql = "UPDATE ConstituentInformation set\
                 [FirstName] = "+data.FirstName+"\
                ,[MiddleName] = "+data.MiddleName+"\
                ,[LastName] = "+data.LastName+"\
                ,[Suffix] = "+data.Suffix+"\
                ,[MothersName] = "+data.MothersName+"\
                ,[FathersName] = "+data.FathersName+"\
                ,[Gender] = "+data.Gender+"\
                ,[CivilStatus] = "+data.CivilStatus+"\
                ,[Birthday] = "+data.Birthday+"\
                ,[Birthplace] = "+data.Birthplace+"\
                ,[PhoneNumber] = "+data.PhoneNumber+"\
                ,[Citizenship] = "+data.Citizenship+"\
                ,[Religion] = "+data.Religion+"\
                ,[Email] = "+data.Email+"\
                where ID = " + data.ID;

            db.executeSql(sql, function (data,err) {
                if (err) {
                    httpMsgs.show500(req,resp,err);
                }
                else {
                    httpMsgs.send200(req,resp);
                }
            });
        
            }
        else {
            throw new Error("Input not valid");
        }
    }
    catch (ex) {
        httpMsgs.show500(req,resp,ex);
    }
    finally {
        resp.end();
    }
}

exports.delete = function (req,resp,reqBody) {
try{
        if (!reqBody) throw new Error("Input not valid");
        var data = JSON.parse(reqBody);
        if (data) {
            if (!data.ID) 
                throw new Error("Constituent ID is not provided!");
            
            var sql = "Delete from ConstituentInformation where ID = " + data.ID;
                
            db.executeSql(sql, function (data,err) {
                if (err) {
                    httpMsgs.show500(req,resp,err);
                }
                else {
                    httpMsgs.send200(req,resp);
                }
            });
            }
        else {
            throw new Error("Input not valid");
        }
    }
    catch (ex) {
        httpMsgs.show500(req,resp,ex);
    }
    finally {
        resp.end();
    }
}