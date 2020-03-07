var express = require('express');
var app = express();
var uniqid = require('uniqid');
var con = require('../config/db.js');
var constant = require('../constant/constant.js');
var bcrypt = require('bcryptjs');
var cm = require('../models/common_model.js');
var Email=require('./email.js');
var randomstring = require("randomstring");
var router = express.Router();

router.post('/adminRegister', function(req, res) {
    var email = req.body.email;
    cm.getSinglerow('admin', "email='" + req.body.email + "'", function(err, rows) {
        if (err) {
            console.log(err)
        }
        //var rows=JSON.parse(JSON.stringify(rows));
        console.log(rows);
        if (rows.length > 0) {
            res.send({
                "status": 0,
                "message": constant.checkEmail
            })
        } else {
            var today = new Date();

            var users = {
                full_name: req.body.full_name,
                email: req.body.email,
                role_id:req.body.role_id,
                password: req.body.password,
                username: req.body.username,
                created_at: today,
                updated_at: today
            }
            //db.query('INSERT INTO admin SET ?',admin, function (error, results) {
            cm.insert('admin', users, function(error, result) {
                if (error) {
                    res.send({
                        "status": 0,
                        "message": error
                    })
                } else {
                    res.send({
                        "status": 1,
                        "message": constant.adminRegister
                    });
                }
            });
        }
    });
});


router.post("/adminLogin", function(req, res) {
    // console.log(req.body);
    var email = req.body.email;
    cm.getSinglerow('admin', "email='" + req.body.email + "'", function(err, result) {
        if (result.length == 0) {
            // req.flash("msg1", "This email is Incorrect");
            // res.redirect("/adminLogin");
            res.send({
                "status": 0,
                "message": constant.Nodata
            })
        } else {
            var result = JSON.parse(JSON.stringify(result[0]));
            console.log(result.password);
            if (result.password == req.body.password) {
                // res.redirect("/dashboard");
                var id = result.role_id
                if (id == 1) {
                    //con.query("select p.*,o.*,po.* from ((purchase_order p JOIN order_item_tbl o ON p.po_no=o.po_no) JOIN po_status po ON po.po_no=po.po_no) WHERE p.status='0' ",function(err,response1){
                    con.query("select * from purchase_order ", function(err, response1) {
                        if (err) {
                            res.send({
                                "status": 0,
                                "message": err
                            })
                        } else {
                            if (response1.length > 0) {
                                var response1 = JSON.parse(JSON.stringify(response1[0]));
                                result.POData = response1;
                                var po_no = response1.po_no;
                                con.query('select * from order_item_tbl WHERE po_no="' + po_no + '";select * from po_status WHERE po_no="' + po_no + '"', function(err, resultss) {
                                    if (err) {
                                        res.send({
                                            "status": 0,
                                            "message": err
                                        })
                                    } else {
                                        var items = JSON.parse(JSON.stringify(resultss[0]));
                                        var po_status = JSON.parse(JSON.stringify(resultss[1]));
                                        result.items = items;
                                        result.po_status = po_status;
                                        res.send({
                                            "status": 1,
                                            "message": constant.adminLogin,
                                            "data": result
                                        })
                                    }
                                })

                            } else {
                                res.send({
                                    "status": 1,
                                    "message": constant.adminLogin,
                                    "data": result
                                })
                            }
                        }
                    })
                } else if (id == 2) {
                    con.query("select * from purchase_order ", function(err, response1) {
                        if (err) {
                            res.send({
                                "status": 0,
                                "message": err
                            })
                        } else {
                            if (response1.length > 0) {
                                var response1 = JSON.parse(JSON.stringify(response1[0]));
                                result.POData = response1;
                                var po_no = response1.po_no;
                                con.query('select * from po_status WHERE po_no="' + po_no + '" And submitted ="1"', function(err, result1) {
                                    if (err) {
                                        res.send({
                                            "status": 0,
                                            "message": err
                                        })
                                    } else {
                                        if (result1.length > 0) {
                                            con.query('select * from order_item_tbl WHERE po_no="' + po_no + '";select * from po_status WHERE po_no="' + po_no + '"', function(err, resultss) {
                                                if (err) {
                                                    res.send({
                                                        "status": 0,
                                                        "message": err
                                                    })
                                                } else {
                                                    var items = JSON.parse(JSON.stringify(resultss[0]));
                                                    var po_status = JSON.parse(JSON.stringify(resultss[1]));
                                                    result.orderItems = items;
                                                    result.poStatus = po_status;
                                                    res.send({
                                                        "status": 1,
                                                        "message": constant.adminLogin,
                                                        "data": result
                                                    })
                                                }
                                            })

                                        } else {
                                            var po_status = JSON.parse(JSON.stringify(result1));
                                            result.po_status = po_status;
                                            res.send({
                                                "status": 1,
                                                "message": constant.adminLogin,
                                                "data": result
                                            })
                                        }
                                    }
                                })
                            } else {
                                res.send({
                                    "status": 1,
                                    "message": constant.adminLogin,
                                    "data": result
                                })
                            }
                        }
                    })
                } else if (id == 3) {
                    con.query("select * from purchase_order WHERE status='1'", function(err, response1) {
                        if (err) {
                            res.send({
                                "status": 0,
                                "message": err
                            })
                        } else {
                            if (response1.length > 0) {
                                var response1 = JSON.parse(JSON.stringify(response1[0]));
                                result.POData = response1;
                                var po_no = response1.po_no;
                                con.query('select * from po_status WHERE po_no="' + po_no + '" And approved_1_by ="1"', function(err, result1) {
                                    if (err) {
                                        res.send({
                                            "status": 0,
                                            "message": err
                                        })
                                    } else {
                                        if (result1.length > 0) {
                                            con.query('select * from order_item_tbl WHERE po_no="' + po_no + '";select * from po_status WHERE po_no="' + po_no + '"', function(err, resultss) {
                                                if (err) {
                                                    res.send({
                                                        "status": 0,
                                                        "message": err
                                                    })
                                                } else {
                                                    var items = JSON.parse(JSON.stringify(resultss[0]));
                                                    var po_status = JSON.parse(JSON.stringify(resultss[1]));
                                                    result.orderItems = items;
                                                    result.poStatus = po_status;
                                                    res.send({
                                                        "status": 1,
                                                        "message": constant.adminLogin,
                                                        "data": result
                                                    })
                                                }
                                            })
                                        } else {
                                            res.send({
                                                "status": 1,
                                                "message": constant.adminLogin,
                                                "data": result
                                            })
                                        }
                                    }
                                })
                            } else {
                                res.send({
                                    "status": 1,
                                    "message": constant.adminLogin,
                                    "data": result
                                })
                            }
                        }
                    })
                } else if (id == 4) {
                    con.query("select * from purchase_order WHERE status='2' or status='3'", function(err, response1) {
                        if (err) {
                            res.send({
                                "status": 0,
                                "message": err
                            })
                        } else {
                            if (response1.length > 0) {
                                var response1 = JSON.parse(JSON.stringify(response1[0]));

                                result.POData = response1;
                                var po_no = response1.po_no;
                                con.query('select * from po_status WHERE po_no="' + po_no + '" And approved_2_by ="1"', function(err, result1) {
                                    if (err) {
                                        res.send({
                                            "status": 0,
                                            "message": err
                                        })
                                    } else {
                                        if (result1.length > 0) {
                                            con.query('select * from order_item_tbl WHERE po_no="' + po_no + '";select * from po_status WHERE po_no="' + po_no + '"', function(err, resultss) {
                                                if (err) {
                                                    res.send({
                                                        "status": 0,
                                                        "message": err
                                                    })
                                                } else {
                                                	con.query('select * from recieved_order_tbl WHERE po_no="'+po_no+'"',function(err,recieveditems){
                                                		if(err){
                                                			res.send({
                                                				"status":0,
                                                				"message":err
                                                			})
                                                		}else{
                                                		var recievedItems=JSON.parse(JSON.stringify(recieveditems));		
                                                			if(recieveditems.length>0){
                                                				
											        var items = JSON.parse(JSON.stringify(resultss[0]));
                                            	        var po_status = JSON.parse(JSON.stringify(resultss[1]));
                                                   		result.orderItems = items;
                                                	    result.poStatus = po_status;
                                                    result.recievedItems=recievedItems;
                                                    res.send({
                                                        "status": 1,
                                                        "message": constant.adminLogin,
                                                        "data": result
                                                    })
           											}else{
                                          		 	 var items = JSON.parse(JSON.stringify(resultss[0]));
                                                    var po_status = JSON.parse(JSON.stringify(resultss[1]));
                                                   result.orderItems = items;
                                                    result.poStatus = po_status;
                                                    res.send({
                                                        "status": 1,
                                                        "message": constant.adminLogin,
                                                        "data": result
                                                    })

                                                			}
                                                		}
                                                	})
                                                }
                                            })

                                        } else {
                                            res.send({
                                                "status": 1,
                                                "message": constant.adminLogin,
                                                "data": result
                                            })
                                        }
                                    }
                                })
                            } else {
                                res.send({
                                    "status": 1,
                                    "message": constant.adminLogin,
                                    "data": result
                                })
                            }
                        }
                    })
                } else if (id == 5) {
                    con.query("select * from purchase_order WHERE status='4'", function(err, response1) {
                        if (err) {
                            res.send({
                                "status": 0,
                                "message": err
                            })
                        } else {
                            if (response1.length > 0) {
                                var response1 = JSON.parse(JSON.stringify(response1[0]));
                                result.POData = response1;
                                var po_no = response1.po_no;
                                con.query('select * from po_status WHERE po_no="' + po_no + '" And good_received ="1"', function(err, result1) {
                                    if (err) {
                                        res.send({
                                            "status": 0,
                                            "message": err
                                        })
                                    } else {
                                        if (result1.length > 0) {
                                            con.query('select * from order_item_tbl WHERE po_no="' + po_no + '";select * from po_status WHERE po_no="' + po_no + '";select * from recieved_order_tbl WHERE po_no="' + po_no + '"', function(err, resultss) {
                                                if (err) {
                                                    res.send({
                                                        "status": 0,
                                                        "message": err
                                                    })
                                                } else {
                                                    var items = JSON.parse(JSON.stringify(resultss[0]));
                                                    var po_status = JSON.parse(JSON.stringify(resultss[1]));
                                                    var recievedItems = JSON.parse(JSON.stringify(resultss[2]));
                                                    result.orderItems = items;
                                                    result.poStatus = po_status;
                                                    result.recieveditems = recievedItems;
                                                    res.send({
                                                        "status": 1,
                                                        "message": constant.adminLogin,
                                                        "data": result
                                                    })
                                                }
                                            })

                                        } else {
                                            res.send({
                                                "status": 1,
                                                "message": constant.adminLogin,
                                                "data": result
                                            })
                                        }
                                    }
                                })
                            } else {
                                res.send({
                                    "status": 1,
                                    "message": constant.adminLogin,
                                    "data": result
                                })
                            }
                        }
                    })
                }
            } else {
                res.send({
                    "status": 0,
                    "message": constant.passIncurrect
                })
            }

        }
    })
})


router.post("/forgetPassword", function(req, res) {
    if(!req.body.email) {
        res.json({
            status: 0,
            message: constant.CHKFIELD
        });
        return;
    } else {
        con.query('SELECT * FROM admin WHERE email=?',[req.body.email],function(err, result) {

                if (err) {
                    res.send({
                        "status": 0,
                        "message": err
                    });
                } else {
                  result=JSON.parse(JSON.stringify(result))
                  console.log(result)
                    if (result.length > 0) {
                        const newPass = randomstring.generate(7);


                      var rand_paasword = newPass;
                        var msg = constant.MSGUPDATEDPASSWORD+' '+ newPass;

                       // mail.sendPasswordReset(req.body.email, result[0].name, newPass);
                          Email.sendEmail({
                                    from: "samyotechindore@gmail.com", 
                                    to: req.body.email, 
                                    subject: "changePassword Successfully", 
                                    body: 'Hello ' + result[0].full_name + ', <br/> This is your new password "'+newPass+'".<br/> Thank You!', 
                                    type: 'html'
                                }, function(err, response){
                                  if(err){
                                    console.log(err);
                                  }
                                  else{
                                    
                          var email=req.body.email;
                         var password=rand_paasword
                         //var updated_at=(new Date()).valueOf().toString()
                          var today = new Date();

                        var updated_at=today;
                        con.query('UPDATE admin set password=?,updated_at=? WHERE email=?', [password,updated_at,req.body.email], function(err, result) {
                            if (err) {
                                console.log(err);
                            } else {
                                res.send({
                                    "status": 1,
                                    "message": constant.FORGETPASS1
                                });
                            }
                        });
                         }
                         }
                        )
                    }
   else{
      res.send({
              "status": 0,
              "message": constant.NOEMAIL
        });
        }
     }
     });
    }
});

module.exports = router;