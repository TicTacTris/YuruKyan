if (process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const mboxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mboxToken = process.env.MAPBOX_TOKEN;
const geoCoder = mboxGeocoding({ accesstoken: mboxToken });

console.log(process.env.MAPBOX_TOKEN);