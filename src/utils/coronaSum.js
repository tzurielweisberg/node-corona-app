const request = require('request');


const coronaSum = (countryCode, callback) => {
  const url = 'https://api.covid19api.com/summary' ;
  console.log('CC is : '+countryCode);
  console.log('url is : ' + url);
  request({ method: 'GET', url, json: true }, (error, { body }={}) => {
    console.log('url is : ' + url);
    
    if (error) {
      console.log("ERROR");
      callback('corona did not succeed', {})
    } else {
      console.log('body is : ' + body);
      let country='';
      let newConfirmed = '';
      let totalConfirmed = '';
      let newDeaths = '';
      let totalDeaths = '';
      let newRecovered = '';
      let totalRecovered = '';


      body.Countries.forEach(element => {
        if (element.CountryCode === countryCode){
          console.log('here is the country ' + element.Country);
          console.log('here is the NewConfirmed ' + element.NewConfirmed);
          console.log('here is the element' + element.totalRecovered);
          
          country = element.Country;
          newConfirmed = element.NewConfirmed;

          totalConfirmed = element.TotalConfirmed;
          newDeaths = element.NewDeaths;
          totalDeaths = element.TotalDeaths;
          newRecovered = element.NewRecovered;
          totalRecovered = element.TotalRecovered;


        }
      });



      /*
      "Country": "Israel",
"CountryCode": "IL",
"Slug": "israel",
"NewConfirmed": 283,
"TotalConfirmed": 13265,
"NewDeaths": 13,
"TotalDeaths": 164,
"NewRecovered": 330,
"TotalRecovered": 3456,
"Date": "2020-04-19T13:05:03Z"*/


      callback(undefined, {
        country: country,
        newConfirmed: newConfirmed,


        totalConfirmed: totalConfirmed ,
          newDeaths: newDeaths ,
          totalDeaths: totalDeaths ,
          newRecovered: newRecovered ,
          totalRecovered: totalRecovered ,


      })
    }
  })
}

module.exports = coronaSum;
