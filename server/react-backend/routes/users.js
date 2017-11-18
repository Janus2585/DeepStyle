var express = require('express');
var cors = require('cors');
var request = require('request');
var app = express();
var fs = require('fs');


/* app represents the express server */
app.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  request.post({
      url: 'https://api.deepai.org/api/neural-style',
      formData: {
      
          content: fs.createReadStream('/path/to/your/file.jpg'),
          
      
      },
      headers: {
          'Api-Key': '3e6667f2-71ed-4a25-bc54-cfe588abc386'
      }
  }, function callback(err, httpResponse, body) {
      if (err) {
          return console.error('request failed:', err);
      }
      var response = JSON.parse(body);
      console.log(response);
  });
});


//To get available styles, make a GET request to https://api.deeparteffects.com/v1/noauth/styles
//this returns a JSON response of this structure:
/*
	{
  "styles": [
    {
      "id": "c7984d3c-1560-11e7-afe2-06d95fe194ed",
      "title": "Abstract 1",
      "url": "https://www.deeparteffects.com/images/styles/0e915d45-83dc-47fe-9f2f-1c75e75601bd.jpg",
      "description": ""
    },
    {
      "id": "ed8e394f-1b90-11e7-afe2-06d95fe194ed",
      "title": "Colorful",
      "url": "https://www.deeparteffects.com/images/styles/d84d1c9f-51fd-4489-8824-da1ad2800f92.jpg",
      "description": ""
    },
    ...
    ]
}
*/

///////////////////////////////////////////////////////

/*
To upload an image to the API, make a POST request to https://api.deeparteffects.com/v1/noauth/upload
the POST request must have this structure 

	{
	"styleId" : "c7984b32-1560-11e7-afe2-06d95fe194ed",
	"imageBase64Encoded" : "iVBORw0KGgoAAAANSUhEUgAAA...",
	"imageSize" : "512", //Optional
	"partnerId" : "f537a85f-e354-4554-997b-8185dffcab92", //Optional
	"optimizeForPrint": "true", //Optional
	"useOriginalColors': "false", //Optional
}

the JSON response is a submission ID
{
	"submissionId" : "1ffb37d6-4d4d-4b6f-ab9d-19e6c77b1424"
}

*/

/////////////////////////////////////////////////////////

/*To get the status of the processing image, make a GET request to  https://api.deeparteffects.com/v1/noauth/result?submissionId=???????????????????
with the submission ID being determined beforehand
The submission can be in the following states: new, processing, finished, error

When the image is finished processing, this GET request will return the following JSON

{
	"status" : "finished",
	"url" : "https://www.deeparteffects.com/images/generated/RANDOM_STRING.jpg"
}


*/

module.exports = app; 