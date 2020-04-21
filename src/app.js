const path = require('path');
const express = require('express');
const hbs = require('hbs');

const coronaSum = require('./utils/coronaSum');


const app = express();
const port = process.env.PORT || 3100;
//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//setup static dir to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
  //matches the name without the extention
  res.render('index', {
    title: 'Corona numbers',
    name: 'Tzuriel Weisberg'
  })
})

app.get('/america', (req, res) => {
  res.render('america', {
    title: 'America',
    name: 'Tzur'
  })
})

app.get('/world', (req, res) => {
  res.render('world', {
    title: 'World',
    
    name: 'Tzur'

  })
})


app.get('/weather', (req, res) => {
  coronaSum((error, transBody) => {
    const country = req.query.country;
    if (error) {
      return res.send({ error })
    }
    else {
      res.send({
        location,
        address: addd,
        forecast: transBody2.transelatedValue,
        degrees: temprature,
        degreesString: transBody3.transelatedValue,
        transelatedForcast: transBody.transelatedString,
      });
    }
  })
})


app.get('/corona', (req, res) => {
  const country = req.query.country;

  coronaSum(country, (error, body) => {
    if (error) {
      return res.send({ error })
    }
    else {
      res.send({
        newConfirmed: body.newConfirmed,
        country: body.country,

        totalConfirmed: body.totalConfirmed ,
          newDeaths: body.newDeaths ,
          totalDeaths: body.totalDeaths ,
          newRecovered: body.newRecovered ,
          totalRecovered: body.totalRecovered 





      });
    }
  })
})





    //has to come last
    app.get('*', (req, res) => {
      res.render('404', {
        errorMsg: 'Page not found',
        title: '404',
        name: 'Tzur'
      });
    })

    app.listen(port, () => {
      console.log('server is up on port  ' + port);

    });

