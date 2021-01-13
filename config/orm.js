var connection = require("./connection")

var orm = {
    all: function (tableName, cb) {
        connection.query(`SELECT * FROM ${tableName}`, function (err, results) {
            if (err) {
                throw err
            } cb(results)

        })

    },
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
}

module.exports = orm
