let app = require('express')(),
    server = require('http').Server(app),
    bodyParser = require('body-parser')
express = require('express'),
    cors = require('cors'),
    http = require('http'),
    path = require('path');
var session = require('express-session');
var flash = require('express-flash');

let adminRoute = require('./routes/admin');
let employeeRoute = require('./routes/employee');
let vendorRoute = require('./routes/vendor');
let nonPoInvoiceRoute = require('./routes/nonPoInvoice');
let applyLeaveRoute = require('./routes/applyLeave');
let purchaseRoute = require('./routes/purchase');

let priestFacilityRoute = require('./routes/priestFacilityBooking');
let culturalProgramRoute = require('./routes/culturalProgramsPayment');

util = require('./utilities/utils');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

app.use(function(err, req, res, next) {
    return res.send({
        "statusCode": util.statusCode.ONE,
        "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG
    });
});

app.use('/admin', adminRoute);
app.use('/api', vendorRoute);
app.use('/api', employeeRoute);
app.use('/api', applyLeaveRoute);
app.use('/api', priestFacilityRoute);
app.use('/api', purchaseRoute);
app.use('/api', culturalProgramRoute);
app.use('/api', nonPoInvoiceRoute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next();
});

/*first API to check if server is running*/
// app.get('*', (req, res) => {
// res.sendFile(path.join(__dirname, '../server/client/dist/index.html'));
// })


server.listen(3000, function() {
    console.log('app listening on port: 3000');
});