var Pattern = require('../models/Pattern')
var express = require('express')
var router = express.Router()

//get all courses
router.get('/getAll', async (req, res) => {
    
	console.log('getting all words(entities)... ');
    Pattern.find({}, { _id: 0 }, function (err, patterns) {
        if (err)
            res.send(err);
        else {
              //console.log(patterns);
			var responseData='{';
			
			for(var a=0;a<patterns.length;a++){
				var x="\""+patterns[a]['value']+"\"";
				var y="\""+patterns[a]['tagger']+"\"";
				if(a==patterns.length-1){
					responseData=responseData+x+':'+y;
				}
				else{
			responseData=responseData+x+':'+y+',';
				}
			
			}
			
			responseData=responseData+'}';
		//	console.log(responseData)
			var resu=JSON.parse(responseData) 
            res.send(resu);
        }
    });
})


  module.exports = router