
const rest = require('rest');
const mime = require('rest/interceptor/mime');

//const APIKEY = '< see config.json >';

//Munich
const CITYID = '3220838';

const client = rest.wrap(mime);

const sunnyIcon = "";
const cloudyIcon = "";
const rainIcon = "";
const snowIcon = "";

// load config
const config = require('./config.json');

client(`http://api.openweathermap.org/data/2.5/weather?id=${CITYID}&units=metric&APPID=${config.api_key}`)
   .then(response => {
      const info = response.entity;
      let icon = sunnyIcon;
      //console.log(info);
      switch (info.weather[0].main) {
      case 'Clouds':
         icon = cloudyIcon;
         break;
      case 'Rain':
         icon = rainIcon;
         break;
      case 'Snow':
         icon = snowIcon;
         break;
      default:
         break;
      }
      let output = `${icon} ${Math.round(info.main.temp)}°C`;
      console.log(output);
   });
