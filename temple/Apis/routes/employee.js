var express = require('express');
var app = express();
var uniqid = require('uniqid');
var con = require('../config/db.js');
var constant = require('../constant/constant.js');
var bcrypt = require('bcryptjs');
var cm = require('../models/common_model.js');
var router = express.Router();


router.post('/addEmployee', function(req, res) {
    var today = new Date();
    var employee = {
        id: uniqid(),
        employee_id: req.body.employee_id,
        employee_name: req.body.employee_name,
        assignment_start: req.body.assignment_start,
        assignment_end: req.body.assignment_end,
        employee_type: req.body.employee_type,
        role: req.body.role,
        group_id: req.body.group_id,
        created_at: today,
        updated_at: today
    }
    cm.insert('employee_tbl', employee, function(error, result) {
        if (error) {
            res.send({
                "status": 0,
                "message": error
            })
        } else {
            res.send({
                "status": 1,
                "message": constant.addEmp
            });
        }
    });
});
router.get('/getAllEmployee', function(req, res) {
    // db.query('SELECT * FROM auction_cat',function(err,results){
    cm.getAllData('employee_tbl', function(err, results) {

        if (!err) {
            var result = JSON.parse(JSON.stringify(results))
            res.send({
                "status": 1,
                "message": constant.getAllEmp,
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

router.post('/updateEmployee', function(req, res) {
    if (!req.body.id || !req.body.employee_id) {
        res.send({
            "status": 0,
            "message": constant.checkAllField
        })
    } else {
        var today = new Date();
        var emp_id = req.body.id;
        var employee_id = req.body.employee_id;
        delete req.body.id;
        req.body.updated_at = today
        delete req.body.employee_id;


        cm.update('employee_tbl', {
            id: emp_id,
            employee_id: employee_id
        }, req.body, function(err, result1) {

            if (!err) {
                res.send({
                    "status": 1,
                    "message": constant.updatedEmp
                })
            } else {
                res.send({
                    "status": 0,
                    "message": err
                })
            }
        })
    }
})


router.post("/deleteEmployee", function(req, res) {
    if (!req.body.id) {
        res.send({
            "status": 0,
            "message": constant.checkAllField
        })
    } else {
        var today = new Date();
        var emp_id = req.body.id;
        delete req.body.id;
        req.body.updated_at = today
        cm.update('employee_tbl', {
            id: emp_id
        }, req.body, function(err, result) {

            if (err) {
                console.log(err);
                res.send({
                    "status": 0,
                    "message": err
                })
            } else {
                if (result.affectedRows > 0) {
                    res.send({
                        "status": 1,
                        "message": constant.deleteEmp
                    })
                } else {
                    res.send({
                        "status": 0,
                        "message": constant.Nodata
                    })
                }
            }
        });
    }
});

router.post("/blockEmployee", function(req, res) {
    if (!req.body.id) {
        res.send({
            "status": 0,
            "message": constant.checkAllField
        })
    } else {
        var today = new Date();
        var emp_id = req.body.id;
        delete req.body.id;
        req.body.updated_at = today
        cm.update('employee_tbl', {
            id: emp_id
        }, req.body, function(err, result) {
            if (err) {
                console.log(err);
                res.send({
                    "status": 0,
                    "message": err
                })
            } else {
                if (result.affectedRows > 0) {
                    res.send({
                        "status": 1,
                        "message": constant.blockEmp
                    })
                } else {
                    res.send({
                        "status": 0,
                        "message": constant.Nodata
                    })
                }
            }
        });
    }
});

module.exports = router;