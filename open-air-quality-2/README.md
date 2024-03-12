# Problem Statement

You have been provided with a public API by Open Air Quality Org, which gathers data about the quality of air through
various data nodes, such as private and government agencies.

Following is the common URL to get the cities:

https://api.openaq.org/v1/cities

However, one can also look for the cities belonging to a given country by appending the following string at the end of
the common URL:

"?country=idOfCountry"

Thus, the URL will be updated to the following in case of getting cities for a given country:

https://api.openaq.org/v1/cities?country=IN

Here, IN represents the country India.

You have to make an API call, and then print the first element of the output resultant array.

You would get the response of the kind.

````json

{
  "meta": {
    // Some Information about the server
  },
  "results": [
    {
      "city": "Delhi",
      "country": "IN",
      "location": 4,
      "count": 329078
    },
    {
      // Information in same format for another city
    }
  ]
}
````

You have to extract the information from the array results, and then print the first city in a <p> tag. The first
element of an array can be accessed using the method as shown below

var elementOne = arr[0];
This <p> tag should be added as innerHtml inside the div with id <city-list>

#### Additional Information:

The function name should be enterTheCode with the country as an argument.
You should use Fetch to make the API request.
You should return a Promise from this function based on the API response.
The promise should be resolved by returning the API response in JSON if the response is a success.
Once the API response is a success you have to print the first city in the response as mentioned in the problem
statement.
The promise should be rejected by returning the JSON {error: "Failed to GET cities for <country-value>"} (example:
Failed to GET cities for IN) if API returns a failure response.
<country-value> should be replaced with the country code entered by the user in the form.