const mysql=require('mysql');
const connection=mysql.createConnection({
	multipleStatements: true,
	host:"localhost",
	user:"root",
	password:"sam%123yo",
	database:"temple"
})
connection.connect(function(err){
	if(!err){
		console.log('connectivity database')
	}
})
module.exports=connection;