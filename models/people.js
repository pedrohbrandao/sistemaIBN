const db = require("../config/db")


const post = db.seq.define("person", {
    id: {
        type: db.Seq.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    name: {
        type: db.Seq.STRING,
        allowNull: false
    },
    profile: {
        type: db.Seq.STRING,
        allowNull: false
    },

})

const criar = function (req, res) {
    post.create({
        name: req.body.name,
        profile: req.body.profile
    }).then(() => {
        res.status(200).json({
            icon: "success",
            status: 200,
            message: "successfully created"
        }).status(200)
    }).catch(() => {
        res.status(400).json({
            icon: "danger",
            status: 400,
            message: "Error"
        }).status(400)
    })
}


module.exports = {
    create_intetion: criar,
    intention_schema: post
}