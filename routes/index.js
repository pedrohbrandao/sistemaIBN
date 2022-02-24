var express = require('express');
const { intention_schema, create_intetion } = require('../models/people');
var router = express.Router();


router.get('/', function (req, res, next) {
  intention_schema.findAll().then(result => {
    res.send(result).status(200)
  })
  });
  router.post('/ex', function (req, res, next) {
    intention_schema.destroy({
      where: {
    id:req.body.id
  }}).then(console.log)
  });

router.post('/new', function (req, res, next) {
  create_intetion(req, res)
});
router.post('/user', function (req, res, next) {
  intention_schema.findAll({where:{id:req.body.id}}).then(result => {
    res.send(result).status(200)
  }).catch(() => {
    res.status(400).json({
      icon: "danger",
      status: 400,
      message: "Error"
    }).status(400)
  })
});
router.post('/edit', function (req, res, next) {
  console.log(req.body)
  intention_schema.update({
    name: req.body.name,
    profile:req.body.profile
  },{where:{id:req.body.id}} ).then(() => {
        res.status(200).json({
            icon: "success",
            status: 200,
            message: "successfully Change"
        }).status(200)
    }).catch(() => {
    res.status(400).json({
      icon: "danger",
      status: 400,
      message: "Error"
    }).status(400)
  })
});

module.exports = router;
