const connect = require('./db_connection');
const fs = require('fs');


const sql = fs.readFileSync(`${__dirname}/db_build.sql`, 'utf8');

const build = (callback)=>{
	connect.query(sql, (error,result)=>{
		if (error) {
			return callback(error);
		}
		callback(null, result);
	});

};


build( (error, result) => {
	if (error) {
		console.log(error);
	}
	console.log('Build Successful');
});


module.exports = build;
