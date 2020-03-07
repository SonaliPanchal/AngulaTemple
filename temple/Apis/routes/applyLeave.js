var express = require('express');
var app = express();
var uniqid = require('uniqid');
var con = require('../config/db.js');
var constant = require('../constant/constant.js');
var bcrypt = require('bcryptjs');
var cm = require('../models/common_model.js');
var router = express.Router();
router.get('/getAllLeaveRulesSetUp', function(req, res) {
    // db.query('SELECT * FROM auction_cat',function(err,results){
    cm.getAllLeaveData('leave_rules_set_up', function(err, results) {

        if (!err) {
            var result = JSON.parse(JSON.stringify(results))
            res.send({
                "status": 1,
                "message": constant.getAllLeaves,
                "data": result
            })
        } else {
            res.send({
                "status": 0,
                "message": err
            })
        }
    })
});

router.post('/addApplyLeave', function(req, res) {
    var today = new Date();
    var leave = {
        apply_leave_id: uniqid(),

        from_date: req.body.from_date,
        to_date: req.body.to_date,
        leave_type_id: req.body.leave_type_id,
        reason_for_leave: req.body.reason_for_leave,
        priest_id: req.body.priest_id,
        number_of_days: req.body.number_of_days,
        created_at: today,
        updated_at: today
    }
    cm.insert('apply_leave', leave, function(error, result) {
        if (error) {
            res.send({
                "status": 0,
                "message": error
            })
        } else {
            res.send({
                "status": 1,
                "message": constant.addApplyLeave
            });
        }
    });
});
router.get('/leaveTracker', function(req, res) {
    // db.query('SELECT * FROM auction_cat',function(err,results){
    cm.getAllLeaveData1('apply_leave', function(err, results) {

        if (!err) {
            var result = JSON.parse(JSON.stringify(results))
            res.send({
                "status": 1,
                "message": constant.getAllLeaves,
                "data": result
            })
        } else {
            res.send({
                "status": 0,
                "message": err
            })
        }
    })
});

router.get('/getAllLeavesTypes', function(req, res) {
    // db.query('SELECT * FROM auction_cat',function(err,results){
    cm.getAllData('leave_type', function(err, results) {

        if (!err) {
            var result = JSON.parse(JSON.stringify(results))
            res.send({
                "status": 1,
                "message": constant.getAllLeaves,
                "data": result
            })
        } else {
            res.send({
                "status": 0,
                "message": err
            })
        }
    })
});




module.exports = router;