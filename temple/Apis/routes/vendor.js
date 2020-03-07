var express = require('express');
var app = express();
var uniqid = require('uniqid');
var con = require('../config/db.js');
var constant = require('../constant/constant.js');
var bcrypt = require('bcryptjs');
var cm = require('../models/common_model.js');
var router = express.Router();


router.post('/addVendor', function(req, res) {
    var today = new Date();
    var vendor = {
        vendor_id: uniqid(),

        vendor_name: req.body.vendor_name,
        address_line1: req.body.address_line1,
        address_line2: req.body.address_line2,
        state: req.body.state,
        city: req.body.city,
        country: req.body.country,
        zip: req.body.zip,
        created_at: today,
        updated_at: today
    }
    cm.insert('vendor_tbl', vendor, function(error, result) {
        if (error) {
            res.send({
                "status": 0,
                "message": error
            })
        } else {
            res.send({
                "status": 1,
                "message": constant.addVend
            });
        }
    });
});
router.get('/getAllVendor', function(req, res) {
    // db.query('SELECT * FROM auction_cat',function(err,results){
    //cm.getAllData('vendor_tbl', function(err, results) {
    cm.getSinglerow('vendor_tbl', "status='1'", function(err, results) {
        if (!err) {
            var result = JSON.parse(JSON.stringify(results))
            res.send({
                "status": 1,
                "message": constant.getAllVend,
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

router.post('/updateVendor', function(req, res) {
    if (!req.body.vendor_id) {
        res.send({
            "status": 0,
            "message": constant.checkAllField
        })
    } else {
        var today = new Date();
        var vendor_id = req.body.vendor_id;
        delete req.body.vendor_id;
        req.body.updated_at = today


        cm.update('vendor_tbl', {
            vendor_id: vendor_id
        }, req.body, function(err, result1) {

            if (!err) {
                res.send({
                    "status": 1,
                    "message": constant.updateVend
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


router.post("/deleteVendor", function(req, res) {
    if (!req.body.vendor_id) {
        res.send({
            "status": 0,
            "message": constant.checkAllField
        })
    } else {
        var today = new Date();
        var vendor_id = req.body.vendor_id;
        delete req.body.vendor_id;
        req.body.updated_at = today
        cm.update('vendor_tbl', {
            vendor_id: vendor_id
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
                        "message": constant.deleteVend
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

router.post("/blockVendor", function(req, res) {
    if (!req.body.vendor_id) {
        res.send({
            "status": 0,
            "message": constant.checkAllField
        })
    } else {
        var today = new Date();
        var vendor_id = req.body.vendor_id;
        delete req.body.vendor_id;
        req.body.updated_at = today
        cm.update('vendor_tbl', {
            vendor_id: vendor_id
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
                        "message": constant.blockVend
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