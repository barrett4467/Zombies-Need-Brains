const db = require("../models");

module.exports = {
    create:  (req,res) => {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))  
    },
    find: (req,res) => {
        db.User   
            .findOne({username: req.query.username})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}