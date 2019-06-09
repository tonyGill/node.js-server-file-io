var fs = require("fs");

var data = "This is being written to file";

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data, 'UTF8');

//Handle events: finish, error

writeStream.on('Finished', function(){
	console.log("Write Complete");
});

writeStream.on('Error', function(err){
	console.log(err.stack);
	
});

console.log("end program");

