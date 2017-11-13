








/* CANNOT FIND A WAY TO ENABLE CORS WITH AXIOS, MUST FIND ANOTHER SOLUTION
var axios = require('axios');

module.exports = {
	fetchStyleOptions: function () {
		return axios.get('https://api.deeparteffects.com/v1/noauth/styles')
			.then(function (response) {
				return response.styles;
			});
	}
}
*/