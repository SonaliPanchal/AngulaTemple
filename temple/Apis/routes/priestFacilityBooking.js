var express = require('express');
var app = express();
var uniqid = require('uniqid');
var con = require('../config/db.js');
var constant = require('../constant/constant.js');
var bcrypt = require('bcryptjs');
var cm = require('../models/common_model.js');
var router = express.Router();


router.get("/allPriest", function(req, res) {
    cm.getAllData('priest_tbl', function(err, results) {
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
                    "message": constant.allPriest,
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


router.get("/allPujaAtTemple", function(req, res) {

    var data = {
        puja_type: 1
    }
    cm.getallDataWhere('puja_tbl', data, function(err, results) {
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
                    "message": constant.allPujaAtTemple,
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



router.get("/allPujaAtHome", function(req, res) {
    var puja_type = 0;
    var data = {
        puja_type: 0
    }
    cm.getallDataWhere('puja_tbl', data, function(err, results) {
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
                    "message": constant.allPujaAtHome,
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


router.get("/getAllPuja", function(req, res) {

    cm.getAllData('puja_tbl', function(err, results) {
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
                    "message": constant.allPuja,
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

router.post("/getPujaFees", function(req, res) {
    var data={
        puja_id:req.body.puja_id
    }
    cm.getallDataWhere('puja_fees',data, function(err, results) {
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
                    "message": constant.getPujaFees,
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



router.post("/getFacilityTimeFee", function(req, res) {
    var data={
        facility_id:req.body.facility_id
    }
    cm.getallDataWhere('facilityfeetime',data, function(err, results) {
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
                    "message": constant.gettimefee,
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



router.post("/addPriestBooking", function(req, res) {
    var today = new Date();
    if (!req.body.facility_type) {
        req.body.facility_type = 0;
    }
    var booking = {
        priest_booking_id: uniqid(),
        puja_id: req.body.puja_id,
        puja_type: req.body.puja_type,
        priest_id: req.body.priest_id,
        dateAndTime: req.body.dateAndTime,
        priest_fee: req.body.priest_fee,
        facility_type: req.body.facility_type,
        created_at: today,
        updated_at: today

    }


    cm.insert('priest_booking', booking, function(error, result) {

        if (error) {
            res.send({
                "status": 0,
                "message": error
            })
        } else {
            console.log(result.insertId);
            var insertId = result.insertId;

            cm.getSinglerow('priest_booking', "id='" + insertId + "'", function(error, results) {
                if (error) {
                    res.send({
                        "status": 0,
                        "message": error
                    })
                } else {
                    var result = JSON.parse(JSON.stringify(results));
                    console.log(result[0].facility_type);
                    if (result[0].facility_type > 0) {
                        var priest_id = result[0].priest_booking_id;
                        var facilty = {
                            facility_id: req.body.facility_id,
                            priest_booking_id: priest_id,
                            from_time: req.body.from_time,
                            to_time: req.body.to_time,
                            date: req.body.date,
                            facility_fee: req.body.facility_fee,
                            created_at: today,
                            updated_at: today
                        }
                        cm.insert('facility_booking', facilty, function(error, result) {
                            if (error) {
                                res.send({
                                    "status": 0,
                                    "message": error
                                })
                            } else {
                                res.send({
                                    "status": 1,
                                    "message": constant.addPriestBooking
                                });
                            }
                        })

                    } else {
                        res.send({
                            "status": 1,
                            "message": constant.addPriestBooking
                        });
                    }
                }
            })

        }
    });
})

// router.post("/addFacilityBooking",function(req,res){
// 	var today=new Date();
// 	var booking={
// 		facility_booking_id:uniqid(),
// 		facilty_id:req.body.facilty_id,
// 		from_time:req.body.from_time,
// 		to_time:req.body.to_time,
// 		date:req.body.date,
// 		fee:req.body.fee,
// 		created_at:today,
// 		updated_at:today

// 	}
// 	  cm.insert('facility_booking',booking,function(error,result){
//   if (error) {
//     res.send({
//       "status":0,
//       "message":error
//     })
//   }
//   else{
//     res.send({
//     	"status":1,
//     	"message":constant.addFacilityBooking
//     });
//   }
//   });
// })

router.get("/allFacility", function(req, res) {
    cm.getAllData('facility_tbl', function(err, results) {
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
                    "message": constant.allFacility,
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

router.post("/priestReservationAtHome", function(req, res) {
    var today = new Date();
   
    var booking = {
       	 first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        email: req.body.email,
        mobile_no: req.body.mobile_no,
        puja_id: req.body.puja_id,
        date:req.body.date,
        created_at: today,
        updated_at: today
    }
        cm.insert('priest_reservation', booking, function(error, result) {

        if (error) {
            res.send({
                "status": 0,
                "message": error
            })
        } else {
        	res.send({
        		"status":1,
        		"message":constant.PriestRservationAtHome
        	})

                }
            })
    });


router.get("/getAllPriestBooking", function(req, res) {
    cm.getAllBookingData('priest_booking', function(error, results) {
        //con.query('' ,function(error,results){
        if (error) {
            res.send({
                "status": 0,
                "message": error,
            })
        } else {
            var results = JSON.parse(JSON.stringify(results));
            if (results.length > 0) {
                res.send({
                    "status": 1,
                    "message": constant.getAllBookingData,
                    "results": results
                })
            }
        }
    })
})


router.get("/getAllDays", function(req, res) {
    cm.getAllData('days_of_week', function(error, results) {
        //con.query('' ,function(error,results){
        if (error) {
            res.send({
                "status": 0,
                "message": error,
            })
        } else {
            var results = JSON.parse(JSON.stringify(results));
            if (results.length > 0) {
                res.send({
                    "status": 1,
                    "message": constant.getAllDays,
                    "results": results
                })
            }
        }
    })
})


router.post("/templeSchedule", function(req, res) {
    var today = new Date();
   
    var booking = {
       	puja_name: req.body.puja_name,
        description: req.body.description,
        price: req.body.price,
        reporting_time: req.body.reporting_time,
        day_id: req.body.day_id,
        created_at: today,
        updated_at: today
    }
        cm.insert('temple_schedule', booking, function(error, result) {

        if (error) {
            res.send({
                "status": 0,
                "message": error
            })
        } else {
        	res.send({
        		"status":1,
        		"message":constant.templeSchedule
        	})

                }
            })
    });


router.post("/addInvoice", function(req, res) {
    var today = new Date();
   
    var invoice = {
        priest_booking_id: req.body.priest_booking_id,
        invoice_amount: req.body.invoice_amount,
        invoice_date: req.body.invoice_date,
        pos_referance: req.body.pos_referance,
        created_at: today,
        updated_at: today
    }
        cm.insert('invoice_details', invoice, function(error, result) {

        if (error) {
            res.send({
                "status": 0,
                "message": error
            })
        } else {
            res.send({
                "status":1,
                "message":constant.addInvoice
            })

                }
            })
    });



module.exports = router;