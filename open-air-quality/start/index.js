// Write your code to get country-wise cities
/* 
Function name should be getCities
You should use Fetch to make API request
You should return a Promise from this function basing on the API response
Promise should be resolved by returning the API response in JSON if the response is success
Promise should be rejected by returning the JSON {error: "Failed to GET cities for <country-value>"} if API returns a failure response.
<country-value> should be replaced with the country code entered by the user in the form

*/


if (typeof exports !== "undefined") {
  module.exports = {
    getCities,
  };
}
