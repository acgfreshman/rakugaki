var express = require("express");
var router = express.Router();

//require mysql module
var mySql = require("mysql");

//require custom config
var userSql =  require("../database/dao/userSql");
var dbConf = require("../database/confs/db");

//create connection pool
var pool = mySql.createPool(dbConf.mysql);

//wrap data as jason
var responseJSON = function (res, ret) {
    if(typeof ret === 'undefined')
        res.json({
            code:'-200',
            msg:'failed'
        });
    else {
        res.json(ret);
    }
};

//add user
router.get("/", function (req, res, next) {
    //get connection from pool
    pool.getConnection(function (err, connection) {
        //get data from front end
        var param = req.query || req.params;
        connection.query(userSql.selectAll, [], function (err, result) {
            if(result){
                result = {
                    code: '200',
                    msg:'success'
                };
            }
            //send JSON
            responseJSON(res,result);
            connection.release();
        });
    });
});

module.exports = router