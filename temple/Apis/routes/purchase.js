var express = require('express');
var app = express();
var uniqid = require('uniqid');
var con = require('../config/db.js');
var constant = require('../constant/constant.js');
var bcrypt = require('bcryptjs');
var cm = require('../models/common_model.js');
var Email=require('./email.js');

var router = express.Router();

router.post("/getAllUnits", function(req, res) {

    var data = {
        select_item_id: req.body.select_item_id
    }
    cm.getallDataWhere('unit_tbl', data, function(err, results) {
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
                    "message": constant.allUnits,
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

router.get("/getAllDeity", function(req, res) {
    cm.getAllData('deity_tbl', function(err, results) {
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
                    "message": constant.allDeity,
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




router.post("/getPrice", function(req, res) {
    var data = {
        unit_id: req.body.unit_id,
        select_item_id: req.body.select_item_id
    }
    cm.getallDataWhere('price_tbl', data, function(err, results) {
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
                    "message": constant.allPrice,
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


router.post("/getAllTemplates", function(req, res) {
    //cm.getAllData('template_tbl', function(err, results) {
var id=req.body.vendor_id;
                            cm.getSinglerow('template_tbl', "vendor_id='" + id + "'", function(err, results) {

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
                    "message": constant.allTemplates,
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

router.post("/getPoStatus", function(req, res) {
    var data = {
        po_no: req.body.po_no
    }
    cm.getallDataWhere('po_status', data, function(err, results) {
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
                    "message": constant.allPoStatus,
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


router.post("/getAllItems", function(req, res) {
//    cm.getAllData('select_item_tble', function(err, results) {
  var vendor_id=req.body.vendor_id;
  var template_id=req.body.template_id;
//                            cm.getSinglerow('template_tbl', "vendor_id='" + id + "'" and , function(err, results) {
    con.query('select * from select_item_tble Where vendor_id="'+vendor_id+'" and template_id="'+template_id+'"',function(err,results){
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
                    "message": constant.allItems,
                    "data": results

                })
            } else {
                res.send({
                    "status": 1,
                    "message": constant.NoData
                })
            }
        }
    })
})

router.get("/getAllCodes", function(req, res) {
    cm.getAllData('expense_committee_code', function(err, results) {
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
                    "message": constant.allCodes,
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

router.get("/getAllDelivery", function(req, res) {
    cm.getAllData('delivery_to', function(err, results) {
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
                    "message": constant.allDelivery,
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

router.post("/addOrder", function(req, res) {
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    var today = new Date();
    var dateFormate = today.toLocaleDateString("en-US");
    var po_no = req.body.po_no;
    con.query("select * from purchase_order Where po_no='" + po_no + "'", function(err, results) {
        if (err) {
            res.send({
                "status": 0,
                "message": err
            })
        } else {
            if (results.length > 0) {
                data = {
                    status: 1,
                    po_total: req.body.po_total
                }
                cm.update('purchase_order', {
                    po_no: po_no
                }, data, function(err, results) {
                    if (err) {
                        res.send({
                            "status": 0,
                            "message": err
                        })
                    } else {
                        var data1={
                            submitted:1
                        }
            cm.update('po_status', {
                    po_no: po_no
                }, data1, function(err, results) {
                    if(err){
                        res.send({
                            "status":0,
                            "message":err
                        })
                    }else{

                        if (results.affectedRows > 0) {
                        con.query('Delete from order_item_tbl Where po_no="'+po_no+'"',function(err,deleteItems){
                            if(err){
                                res.send({
                                    "status":0,
                                    "message":err
                                })
                            }else{
                                if(deleteItems.affectedRows>0){
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
                                }   
                            }
                        })
                            res.send({
                                "status": 1,
                                "message": constant.purchaseOrder
                            })
                        }
                    }
                })
                        
                    }
                })
            } else {
                var purchase = {
                    purchase_id: uniqid(),
                    vendor_id: req.body.vendor_id,
                    po_no: req.body.po_no,
                    delivery_id: req.body.delivery_id,
                    po_total: req.body.po_total,
                    grant_total: req.body.grant_total,
                    date_recieved: dateFormate,
                    date_order: req.body.date_order,
                    prepared_by:req.body.prepared_by,
                    status: 1,
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

                               // cm.getSinglerow('template_save_tbl',function(err,results){
                                                                                     var template_id = result[0].template_id;

                                cm.getSinglerow('template_save_tbl', "template_id='" + template_id + "'", function(err, results) {

                                    if(err){
                                        res.send({
                                            "status":0,
                                            "message":err

                                        })
                                    }else{
                                        var result1=JSON.parse(JSON.stringify(results));
                                        if(result1.length>0){
                                            var template_id = result[0].template_id;
                                dataTem = {
                                    po_no: po_no
                                }
                                //cm.insert('template_save_tbl', dataTem, function(err, results) {
                                //cm.update('template_save_tbl', dataTem, function(err, results) {
                                  con.query('UPDATE template_save_tbl SET ? Where template_id="'+template_id+'"',dataTem,function(err,results){
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
                                        }else{
                                        var template_id = result[0].template_id;
                                dataTem = {
                                    po_no: po_no,
                                    template_id: template_id
                                }
                            cm.insert('template_save_tbl', dataTem, function(err, results) {
                                //cm.update('template_save_tbl', dataTem, function(err, results) {
                            //      con.query('UPDATE template_save_tbl SET ?',dataTem,function(err,results){
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
                                    }
                                })
                                
                            }
                        })
                    }
                })
            }
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
        prepared_by:req.body.prepared_by,
        date_recieved: dateFormate,

         date_order: req.body.date_order,
        //  date_recieved: req.body.date_recieved,
        // date_order: req.body.date_order,
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

                                cm.getSinglerow('template_save_tbl', "template_id='" + template_id + "'", function(err, results) {

                    // cm.getAllData('template_save_tbl',function(err,results){
                        if(err){
                            res.send(
                            {
                                "status":0,
                                "message":err
                            })
                        }else{
                            var result1=JSON.parse(JSON.stringify(results));
                            if(result1.length>0){
                                var template_id = result[0].template_id;

                    dataTem = {
                        po_no: po_no
                    }
                    //cm.insert('template_save_tbl', dataTem, function(err, results) {
                      //cm.update('template_save_tbl', dataTem, function(err, results) {
                                                       con.query('UPDATE template_save_tbl SET ? Where template_id="'+template_id+'"',dataTem,function(err,results){
                        if (err) {
                            res.send({
                                "status": 0,
                                "message": err
                            })
                        } else {
                            var dataStatus = {
                                po_no: po_no,
                                draft: 1,
                                submitted: 0
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
                            }else{
                                var template_id = result[0].template_id;

                    dataTem = {
                        po_no: po_no,
                        template_id: template_id
                    }
                    cm.insert('template_save_tbl', dataTem, function(err, results) {
                      //cm.update('template_save_tbl', dataTem, function(err, results) {
                    //                                   con.query('UPDATE template_save_tbl SET ?',dataTem,function(err,results){
                        if (err) {
                            res.send({
                                "status": 0,
                                "message": err
                            })
                        } else {
                            var dataStatus = {
                                po_no: po_no,
                                draft: 1,
                                submitted: 0
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

                        }
                    })
                    
                }
            })
        }
    })

})




router.post("/addRecievedItems", function(req, res) {
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    var today = new Date();
    var dateFormate = today.toLocaleDateString("en-US");
    var po_no = req.body.po_no;
    cm.getSinglerow('purchase_order', "po_no='" + po_no + "'", function(err, results) {
        if (err) {
            res.send({
                "status": 0,
                "message": err
            })
        } else {
            if (results.length > 0) {
                //var items=];
                var datalength = req.body.recievedItems.length;

                for (var i = 0; i < datalength; i++) {

                    var data = {
                        recieved_order_id: uniqid(),
                        po_no: po_no,
                        order_item_id: req.body.recievedItems[i].order_item_id,
                        received_qty: req.body.recievedItems[i].received_qty,
                        final_price: req.body.recievedItems[i].final_price,
                        check: req.body.recievedItems[i].check,
                        action: req.body.recievedItems[i].action
                    }

                    cm.insert('recieved_order_tbl', data, function(err, results) {

                        if (err) {
                            console.log(err);
                        }
                    })

                }
                var data = {
                    good_received: 1,
                    last_updated_by:req.body.last_updated_by,
                    last_updated_comment:req.body.last_updated_comment
                }

                cm.update('po_status', {
                    po_no: po_no
                }, data, function(err, results) {
                    if (err) {
                        res.send({
                            "status": 0,
                            "message": err
                        })
                    } else {
                        data = {
                            grant_total: req.body.grant_total,
                            date_recieved: req.body.date_recieved,
                            status:3
                        }
                        cm.update('purchase_order', {
                            po_no: po_no
                        }, data, function(err, results) {
                            if (err) {
                                res.send({
                                    "status": 0,
                                    "message": err
                                })
                            } else {
                                res.send({
                                    "status": 1,
                                    "message": constant.addRecievedItems
                                })
                            }
                        })
                    }
                })
            } else {
                res.send({
                    "status": 0,
                    "message": constant.poId
                })
            }
        }

    })
})


router.post("/approvedByOne", function(req, res) {
    var po_no = req.body.po_no;
    var data = {
        approved_1_by: 1,
        approved_by_one_name:req.body.approved_by_one_name,
        approved_by_one_comment:req.body.approved_by_one_comment
    
    }
    cm.update('po_status', {
        po_no: po_no
        
    }, data, function(err, results) {
        if (err) {
            res.send({
                "status": 0,
                "message": err
            })
        } else {
            res.send({
                "status": 1,
                "message": constant.approved_1_by
            })
        }

    })
})

router.post("/getAllInventory", function(req, res) {
   var data = {
       deity_id: req.body.deity_id
    }
    cm.getallDataWhere('item_tbl', data, function(err, results) {

        if (err) {
            res.send({
                "status": 0,
                "message": err
            })
        } else {
            if(results.length>0){
            res.send({
                "status": 1,
                "message": constant.allInventory,
                "data":results
            })
        }else{
            res.send({
                "status":0,
                "message":constant.Nodata
            })
        }
        }


    })
})

router.post("/getAllPurchasInvoice", function(req, res) {
    cm.getAllPurchasInvoice(req.body.date_order, function(err, results) {
        if (err) {
            res.send({
                "status": 0,
                "message": err
            })
        } else {
            res.send({
                "status": 1,
                "message": constant.allInventory,
                "data":results
            })
        }
})
})

router.post("/approvedByTwo", function(req, res) {
    var po_no = req.body.po_no;
    var data = {
        approved_2_by: 1,
        approved_by_two_name:req.body.approved_by_two_name,
        approved_by_two_comment:req.body.approved_by_two_comment
    }
    cm.update('po_status', {
        po_no: po_no
    }, data, function(err, results) {
        if (err) {
            res.send({
                "status": 0,
                "message": err
            })
        } else {
            var data={
                status:2
            }
            cm.update('purchase_order', {
        po_no: po_no
    }, data, function(err, results) {
        if(err){
            res.send({
                "status":0,
                "message":err
            })
        }else{
            con.query('select * from order_item_tbl Where po_no="'+po_no+'"',function(err,results){
             if(err){

             } else{
                var result=JSON.parse(JSON.stringify(results));
                
                Email.sendEmail({
                                    from: "samyotechindore@gmail.com", 
                                    to: "amolsingh@samyotech.com", 
                                    subject: "All Purchase Order Items", 
                                    body: 'Hello vender, <br/> This is your order details "'+result+'".<br/> Thank You for purchase items !', 
                                    type: 'html'
                                }, function(err, response){
                                  if(err){
                                    console.log(err);
                                  }else{
                                    var data = {
        to_vendor:1
    }
    cm.update('po_status', {
        po_no: po_no
    }, data, function(err, results) {
        if(err){
            res.send({
                "status":0,
                "message":err
            })
        }else{
          res.send({
                "status": 1,
                "message": constant.approved_2_by
            })
        }
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

router.post("/addPoInvoice", function(req, res) {
    var po_no = req.body.po_no;
    if (!po_no) {
        res.send({
            "status": 0,
            "message": constant.checkFields
        })
    }
    cm.getSinglerow('purchase_order', "po_no='" + po_no + "'", function(err, results) {
        if (err) {
            res.send({
                "status": 0,
                "message": err
            })
        } else {
            if (results.length > 0) {
                var data = {
                    po_no: po_no,
                    invoice_no: req.body.invoice_no,
                    invoice_date: req.body.invoice_date
                }
                cm.insert('invoice_po_tbl', data, function(err, results) {


                    if (err) {
                        res.send({
                            "status": 0,
                            "message": err
                        })
                    } else {
         var data={
         	complete_payment:1
         }
                    	  cm.update('po_status', {
        po_no: po_no
    }, data, function(err, results) {
             if(err){
             	res.send({
             		"status":0,
             		"message":err
             	})
             }else{
                var data={
                    status:4
                }
                  cm.update('purchase_order', {
                
        po_no: po_no
    }, data, function(err, results) {
        if(err){
            res.send({
                "status":0,
                "message":err
            })
        }else{
                        res.send({
                            "status": 1,
                            "message": constant.addPoInvoice
                        })
        }
    })

                   }
                   })
                    }

                })
            } else {
                res.send({
                    "status": 1,
                    "message": constant.Nodata
                })
            }
        }
    })
})



router.post("/getInvoiceModule", function(req, res) {
      var po_no= req.body.po_no;
    
    cm.getInvoiceModule(po_no, function(err, results) {
        if (err) {
            res.send({
                "status": 0,
                "message": err
            })
        } else {
            var results = JSON.parse(JSON.stringify(results));
            if(results.length>0){
         cm.getSinglerow('purchase_order', "po_no='" + po_no + "'", function(err, resultsss) {
            if(err){
                res.send({
                    "status":0,
                    "message":err
                })
             }else{
                var result=JSON.parse(JSON.stringify(resultsss));
              
                var data=result[0].po_total
                let items=results
                items[0].po_total=data
                res.send({
                    "status": 1,
                    "message": constant.invoiceModule,
                    "data": items
                })
            }

            
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

router.get('/purchaseOrderTracker',function(req,res){
    con.query("select p.purchase_id,p.po_no,p.date_order as po_date,p.date_recieved as date_recieved,p.status,v.vendor_name from purchase_order p Join vendor_tbl v ON p.vendor_id =  v.vendor_id ",function(err,results){
        if(err){
            res.send({
                "status":0,
                "message":err
            })
        }else{
            var result=JSON.parse(JSON.stringify(results));
                if(result.length>0){
                    res.send({
                        "status":1,
                        "message":constant.purchaseOrder,
                        "data":result
                    })
                                                    }else{
                                                    res.send({
                                                        "status": 1,
                                                        "message": constant.Nodata
                                                        
                                                    })
                                                }
          }
      })
})

            
    

router.post('/getAllPurchaseData',function(req,res){
	var purchase_id=req.body.purchase_id;
	con.query("select p.* , v.vendor_name from purchase_order p Join vendor_tbl v ON p.vendor_id =  v.vendor_id WHERE p.purchase_id ='"+purchase_id+"' ",function(err,results){
		if(err){
			res.send({
				"status":0,
				"message":err
			})
		}else{
			var result=JSON.parse(JSON.stringify(results));
                if(result.length>0){
            var po_no=result[0].po_no;
            console.log(po_no)
            con.query('select * from order_item_tbl Where po_no="'+po_no+'";select * from  po_status Where po_no="'+po_no+'"',function(err,resultsss){
                           if (err) {
                            res.send({
                              "status": 0,
                              "message": err
                              })
                          } else {
                                                    var items = JSON.parse(JSON.stringify(resultsss[0]));
                                                    var po_status = JSON.parse(JSON.stringify(resultsss[1]));
                                                    result[0].orderItems = items;
                                                    result[0].po_status = po_status;
                                                    if(items.length>0){
                                                        con.query('select * from recieved_order_tbl Where po_no="'+po_no+'"',function(err,results){
                                                            if(err){
                                                                res.send({
                                                                    "status":0,
                                                                    "message":err
                                                                })
                                                            }else{
                                                                var recievedItems=JSON.parse(JSON.stringify(results));
                                                                if(recievedItems.length>0){
                                                                result[0].recievedItems=recievedItems;
                                                                cm.getSinglerow('invoice_po_tbl',"po_no='" + po_no + "'",function(err,invoiceDetails){
                                                                    if(err){
                                                                        res.send({
                                                                            "status":0,
                                                                            "message":err
                                                                        })
                                                                    }else{
                                                                        var invoiceDetails=JSON.parse(JSON.stringify(invoiceDetails));
                                                                        result[0].invoiceDetails=invoiceDetails;
                                                                        if(invoiceDetails.length>0){
                                                                               res.send({
                                                                    "status":1,
                                                                    "message":constant.getAllPurchasData,
                                                                    "data":result[0]
                                                                })       
                                                                        }else{
                                                                            res.send({
                                                                    "status":1,
                                                                    "message":constant.getAllPurchasData,
                                                                    "data":result[0]
                                                                })            
                                                                        }                                                                     
                                                                    }
                                                                })
                                                                
                                                            }else{
                                                                res.send({
                                                                    "status":1,
                                                                    "message":constant.getAllPurchasData,
                                                                    "data":result[0]
                                                                })
                                                        }
                                                        }
                                                        })
                                                    }else{
                                                    res.send({
                                                        "status": 1,
                                                        "message": constant.getAllPurchasData,
                                                        "data": result[0]
                                                    })
                                                }
          }
      })
			
	}else{
        res.send({
            "status":1,
            "message":constant.Nodata
        })
    }    
}
	}
    )
})
module.exports = router;