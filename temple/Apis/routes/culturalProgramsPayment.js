var express = require('express');
var app = express();
var uniqid = require('uniqid');
var con = require('../config/db.js');
var constant = require('../constant/constant.js');
var bcrypt = require('bcryptjs');
var cm = require('../models/common_model.js');

var router = express.Router();


router.get("/getAllCheckPayable", function(req, res) {
    cm.getAllData('check_payable_to', function(err, results) {
        if (err) {
            res.send({
                "status": 0,
                "message": err
            })
        } else {
            var results = JSON.parse(JSON.stringify(results));
            if (results.length > 0) {
                res.send({
                    "status": 1,
                    "message": constant.allCheck,
                    "data": results

                })
            } else {
                res.send({
                    "status": 0,
                    "message": constant.NoData
                })
            }
        }
    })
})

router.get("/getAllOfficers", function(req, res) {
    cm.getAllData('positions_tbl', function(err, results) {
        if (err) {
            res.send({
                "status": 0,
                "message": err
            })
        } else {
            var results = JSON.parse(JSON.stringify(results));
            if (results.length > 0) {
                res.send({
                    "status": 1,
                    "message": constant.allOfficers,
                    "data": results

                })
            } else {
                res.send({
                    "status": 0,
                    "message": constant.NoData
                })
            }
        }
    })
})


router.get("/getAllPaymentMode", function(req, res) {
    cm.getAllData('payment_mode', function(err, results) {
        if (err) {
            res.send({
                "status": 0,
                "message": err
            })
        } else {
            var results = JSON.parse(JSON.stringify(results));
            if (results.length > 0) {
                res.send({
                    "status": 1,
                    "message": constant.allPaymentMode,
                    "data": results

                })
            } else {
                res.send({
                    "status": 0,
                    "message": constant.NoData
                })
            }
        }
    })
})


router.post("/addCulturalPayments", function(req, res) {
    var today = new Date();
    var payments = {
        check_payable_to: req.body.check_payable_to,
        committee: req.body.committee,
        check_number: req.body.check_number,
        payment_mode_id: req.body.payment_mode_id,
        code_id: req.body.code_id,
        officer1_sign: req.body.officer1_sign,
        officer2_sign: req.body.officer2_sign,
        officer1_sign_date: req.body.officer1_sign_date,
        officer2_sign_date: req.body.officer2_sign_date,
        officer3_sign_date: req.body.officer3_sign_date,
        date_payment_due: req.body.date_payment_due,
        invoice_no: req.body.invoice_no,
        amount: req.body.amount,
        grand_total: req.body.grand_total,
        date_of_mailing: req.body.date_of_mailing,
        particulars: req.body.particulars,
        approval_ec_bod: req.body.approval_ec_bod,
        created_at: today,
        updated_at: today
    }
    cm.insert('cultural_program_payments', payments, function(error, result) {
        if (error) {
            res.send({
                "status": 0,
                "message": error
            })
        } else {
            res.send({
                "status": 1,
                "message": constant.addCulturalPayments
            })
        }
    });
})



module.exports = router;