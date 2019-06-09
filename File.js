var fs = require("fs");
// Non blocking approach
fs.readFile('input.txt', function(err,data){
	if(err)
		return console.error(err);
	or if(err)
		console.log(err.stack);
	return;
}
	console.log(data.toString());
});

console.log("end program");
