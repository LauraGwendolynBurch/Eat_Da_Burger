var connection = require("./connection")

var orm = {
    all: function(tableName, cb){
        connection.query(`SELECT * FROM ${tableName}`, function(err, results){
            if (err){
                throw err
            } cb(results)

        })

    }
}

module.exports = orm
