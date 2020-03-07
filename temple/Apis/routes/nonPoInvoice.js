var express = require('express');
var app = express();
var uniqid = require('uniqid');
var con = require('../config/db.js');
var constant = require('../constant/constant.js');
var bcrypt = require('bcryptjs');
var cm = require('../models/common_model.js');

var router = express.Router();


router.get("/getAllCostCenter", function(req, res) {
    cm.getAllData('cost_center', function(err, results) {
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
                    "message": constant.allCostCenter,
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
router.post("/addNonPoInvoice", function(req, res) {
    var today = new Date();
    var purchase = {
        non_po_invoice_id: uniqid(),
        invoice_number: req.body.invoice_number,
        invoice_date: req.body.invoice_date,
        payment_to: req.body.payment_to,
        payment_due_date: req.body.payment_due_date,
        mode_of_payment: req.body.mode_of_payment,
        date_of_mailing: req.body.date_of_mailing,
        approval_ec_bod: req.body.approval_ec_bod,
        cost_center: req.body.cost_center,
      
        invoice_description: req.body.invoice_description,
       
        total: req.body.total,
      
        created_at: today,
        updated_at: today
    }
    cm.insert('non_po_invoice', purchase, function(error, result) {
        if (error) {
            res.send({
                "status": 0,
                "message": error
            })
        } else {
            console.log(result.insertId);
            var id = result.insertId;
            cm.getSinglerow('non_po_invoice', "id='" + id + "'", function(err, results) {

                var result = JSON.parse(JSON.stringify(results));
                if (result.length > 0) {
                    console.log(result);
                    var non_po_invoice_id = result[0].non_po_invoice_id;
                    console.log(non_po_invoice_id);
                    //var items=];
                    var datalength = req.body.items.length;

                    for (var i = 0; i < datalength; i++) {
                        data = {
                            non_po_invoice_id:non_po_invoice_id,
                            code_id: req.body.items[i].code_id,
                            particulars: req.body.items[i].particulars,
                            amount: req.body.items[i].amount,

                        }
                        cm.insert('non_po_expenses', data, function(err, results) {

                        })

                    }
                    res.send({
                        "status":1,
                        "message":constant.NonPoInvoice
                    })
                        }
                    })
                }
            })
        })


router.post("/addDraft", function(req, res) {
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    var today = new Date();
    var dateFormate = today.toLocaleDateString("en-US");

    var statusVal = 0;
    var purchase = {
        purchase_id: uniqid(),
        vendor_id: req.body.vendor_id,
        po_no: req.body.po_no,
        delivery_id: req.body.delivery_id,
        po_total: req.body.po_total,
        grant_total: req.body.grant_total,
        date_recieved: dateFormate,
        date_order: dateFormate,
        status: statusVal,
        template_id: req.body.template_id,
        code_id: req.body.code_id,
        grant_total: "0.0",
        // item_id:req.body.item_id,
        // unit_id:req.body.unit_id,    
        // qty:req.body.qty,
        // price:req.body.price,
        // amount:req.body.amount,
        // received_qty:req.body.received_qty,
        // total_price:req.body.total_price,
        // action:req.body.action,
        // check:req.body.check,
        created_date: today,
        updated_date: today
    }
    cm.insert('purchase_order', purchase, function(error, result) {
        if (error) {
            res.send({
                "status": 0,
                "message": error
            })
        } else {
            console.log(result.insertId);
            var id = result.insertId;
            cm.getSinglerow('purchase_order', "id='" + id + "'", function(err, results) {

                var result = JSON.parse(JSON.stringify(results));
                if (result.length > 0) {
                    console.log(result);
                    var po_no = result[0].po_no;
                    console.log(po_no);
                    //var items=];
                    var datalength = req.body.items.length;

                    for (var i = 0; i < datalength; i++) {
                        data = {
                            order_item_id: uniqid(),
                            select_item_id: req.body.items[i].select_item_id,
                            po_no: po_no,
                            unit_id: req.body.items[i].unit_id,
                            qty: req.body.items[i].qty,
                            price: req.body.items[i].price,
                            amount: req.body.items[i].amount,

                        }
                        cm.insert('order_item_tbl', data, function(err, results) {

                        })

                    }
                    var template_id = result[0].template_id;
                    dataTem = {
                        po_no: po_no,
                        template_id: template_id
                    }
                    cm.insert('template_save_tbl', dataTem, function(err, results) {
                        if (err) {
                            res.send({
                                "status": 0,
                                "message": err
                            })
                        } else {
                            var dataStatus = {
                                po_no: po_no,
                                draft: 1,
                                submitted: 1
                            }
                            cm.insert('po_status', dataStatus, function(err, results) {
                                if (err) {
                                    res.send({
                                        "status": 0,
                                        "message": err
                                    })
                                } else {

                                    res.send({
                                        "status": 1,
                                        "message": constant.purchaseOrder
                                    })

                                }
                            })
                        }
                    })
                }
            })
        }
    })

})


module.exports = router;