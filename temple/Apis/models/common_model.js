var con=require('../config/db.js');
module.exports.update=function(table, where, obj, cb)
{
    var que = "UPDATE "+table+" SET ";
    var counter=1;
    for(var k in obj){
    if(counter==1){
         que += k+" = '"+obj[k]+"'"
    }
    else{
    que += ", "+k+" = '"+obj[k]+"'"
    }
     counter++;
    }
    var key = Object.keys(where);
    que += " WHERE "+key[0]+" = '"+where[key[0]]+"'";
    con.query(que, cb);
}
module.exports.update1=function(table, where, obj, cb)
{
    var que = "UPDATE "+table+" SET ";
    var counter=1;
    for(var k in obj){
    if(counter==1){
         que += k+" = '"+obj[k]+"'"
    }
    else{
    que += ", "+k+" = '"+obj[k]+"'"
    }
     counter++;
    }
    var key = Object.keys(where);
    que += " WHERE "+key[0]+" = '"+where[key[0]]+"' AND "+key[1]+" = '"+where[key[1]]+"'";
    con.query(que, cb);
}
module.exports.getallDataWhere=function(table,obj,cb)
{

    con.connect(function(err){
    var que = "SELECT * FROM  "+table+" WHERE ";
        var counter=1;
        for(var k in obj){
            if(counter==1)
            {
                que += k+"= '"+obj[k]+"'";
            }
            else
            {
                que += " AND "+k+"= '"+obj[k]+"' ";

            }
            counter++;
        }
   
    // console.log(que);
    con.query(que, cb);
    })
}
module.exports.deleteOrder=function(po_no,submitStatus,cb)
{
    var que = "delete from purchase_order where po_no='"+po_no+"' AND submit_status='"+submitStatus+"' ";
    con.query(que, cb);
}
module.exports.getSinglerow=function(table,where, cb)
{
    
        var que = "SELECT * FROM "+table+" WHERE "+where;
        console.log(que);
        con.query(que, cb);
       // console.log(que);
}

module.exports.insert=function(table, obj, cb)
{
    con.connect(function(err){
        var que = "INSERT INTO "+table+" (";
        var counter = 1;
        for(var k in obj){
            if (counter==1) {
                que += " `"+k+"`"
            }
            else{
                que += ", `"+k+"`"
            }
            counter++;
        }   
        que += ") VALUES ( ";
        var counter = 1;
            for (var l in obj) {
                if (counter==1) {
                    que += "'"+obj[l]+"'"
                }else{
                    que += ", "+"'"+obj[l]+"'"
                }       
                counter++;
            }
        que += ")";
        con.query(que, cb);
    });
}
module.exports.getAllData=function(table, cb)
{
    
        var que = "SELECT * FROM "+table+" ";
        con.query(que, cb);
       // console.log(que);
}


module.exports.getAllLeaveData=function(table,cb){
    var que="SELECT l.leave_rules_set_up_id,e.employee_type_name,l.sick,l.braverment,l.personal,l.track_time_off,l.additional,l.pto_cashable,l.pto_carry_over from "+table+" l left JOIN employee_type e ON l.employee_type_id=e.employee_type_id "
    con.query(que,cb);
}

module.exports.getAllLeaveData1=function(table,cb){
    var que="SELECT a.*, l.leave_type_name,e.priest_name from "+table+" a LEFT JOIN leave_type l ON a.leave_type_id=l.leave_type_id LEFT JOIN priest_tbl e ON a.priest_id=e.priest_id "
    con.query(que,cb);
}

module.exports.getAllBookingData=function(table,cb){
    var que='SELECT p.id,p.priest_booking_id,p.dateAndTime,p.priest_fee,p.facility_type as facility_required ,p11.puja_type_name as priest_choice,COALESCE(f.facility_booking_id,"-") as facility_booking_id,COALESCE(f.from_time,"-") as facility_timeslot_from,COALESCE(f.to_time,"-") as facility_timeslote_to ,COALESCE(f.date,"-") as facility_date,COALESCE(f.facility_fee,"-") as facility_fee,COALESCE(f1.facilty_name,"-") as facility_name ,ph.puja_name ,p12.priest_name from priest_booking p LEFT JOIN facility_booking f ON p.priest_booking_id = f.priest_booking_id LEFT JOIN facility_tbl f1 ON f1.facility_id=f.facility_id LEFT JOIN puja_tbl ph ON ph.puja_id = p.puja_id LEFT JOIN priest_tbl p12 ON p12.priest_id=p.priest_id LEFT JOIN puja_type_table p11 ON p.puja_type=p11.puja_type'
    con.query(que,cb);
}
module.exports.getAllPurchasOrder=function(table,cb){
    var que='select p.purchase_id,p.po_no,p.qty,p.price,p.amount,p.received_qty,p.total_price,p.status,p.action,p.pur_invoice_status,p.created_date,p.updated_date,v.vendor_name,d1.delivery_name,t.template_name,c.code_name,i.item_name,u.unit_name from purchase_order p LEFT Join vendor_tbl v ON v.vendor_id=p.vendor_id LEFT JOIN delivery_to d1 ON d1.delivery_id=p.delivery_id LEFT JOIN template_tbl t ON t.template_id=p.template_id LEFT JOIN item_tbl i ON i.item_id=p.item_id LEFT JOIN expense_committee_code c ON c.code_id=p.code_id LEFT JOIN unit_tbl u ON u.unit_id=p.unit_id'
    con.query(que,cb);
}

module.exports.getAllPurchasInvoice=function(date_order,cb){
    var que="select p.po_no,p.date_order,p.status,p.date_recieved as good_received,i.invoice_no,i.invoice_date,v.vendor_name,p.grant_total as invoice_original_amount from purchase_order p LEFT JOIN vendor_tbl v ON v.vendor_id=p.vendor_id LEFT JOIN invoice_po_tbl i ON i.po_no=p.po_no WHERE p.date_order='"+date_order+"'"
    con.query(que,cb);
}

module.exports.getInvoiceModule=function(po_no,cb){
    var que="select s.item_name as product ,u.unit_name as unit, o.qty as quantity ,o.price,o.amount from (((order_item_tbl o JOIN purchase_order p ON o.po_no=p.po_no) JOIN select_item_tble s ON o.select_item_id=s.item_id ) JOIN unit_tbl u ON o.unit_id=u.unit_id ) WHERE o.po_no='"+po_no+"'"
    con.query(que,cb);
}