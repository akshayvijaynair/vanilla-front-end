function getCities(country) {
  return new Promise(async (resolve, reject) => {
    var url = "https://api.openaq.org/v1/cities?country=" + country;
    try {
      const rawResponse = await fetch(url, {
        method: 'GET'
      });
      if(rawResponse.ok) {
        const response = await rawResponse.json();
        console.log(response);
        resolve(response);
      } else {
        const error = new Error();
        error.message = 'Something went wrong.';
        throw error;
      }
    } catch(e) {
      reject(
        JSON.stringify({
          error: "Failed to GET cities for " + country,
        })
      );
    }
  });
}

if (typeof exports !== "undefined") {
  module.exports = {
    getCities,
  };
}
