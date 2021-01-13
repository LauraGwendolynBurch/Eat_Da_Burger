var orm = require("../config/orm");

var burger = {
    all: function(cb){
        orm.all("burgers", function(results){
            cb(results)
        } )
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
}

module.exports = burger