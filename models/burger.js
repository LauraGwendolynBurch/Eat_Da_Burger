var orm = require("../config/orm");

var burger = {
    all: function(cb){
        orm.all("burgers", function(results){
            cb(results)
        } )
    }
}

module.exports = burger