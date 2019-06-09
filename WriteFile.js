fs = writeFile('input.txt', "This is Written", function(err){
	
	if(err){
		return console.error(err);
	}
	
	/ Close the opened file.
      fs.close(fd, function(err) {
         if (err) {
            console.log(err);