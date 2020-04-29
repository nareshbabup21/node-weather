const request = require('request')
const forecast = (latitude, longitude, callback) => {
//const url = 'http://api.weatherstack.com/current?access_key=0dacb83d02bf50b0544c1afbb9363a6c&query=37.8267,-122.4233'
const url = 'http://api.weatherstack.com/current?access_key=0dacb83d02bf50b0544c1afbb9363a6c&query=' + latitude + ',' + longitude
console.log('latitude is  =>' + latitude)
console.log('Longitude is  =>' + longitude)
request({ url: url, json: true }, (error, response) => {
//console.log(response.body)
        if (error) {
            callback('Unable to connect to weather  services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. ', undefined)
        } else {
            //callback(undefined, response.body.location.lat )

            callback(
            undefined, response.body.locationat + response.body.location.lon + response.body.location.region + response.body.current.humidity,response.body.current.precip,response.body.current.temperature)
            console.log('Latitude of location => ' + response.body.location.lat)
            console.log('Longitude of location => ' + response.body.location.lon)
            console.log('Region ' + response.body.location.region)
           console.log('Humidity => ' + response.body.current.humidity)
           console.log('Precipitation is ' + response.body.current.precip)
           console.log('Current temperature is ' + response.body.current.temperature)
            // + ' It is currently ' + response.body.current.temperature + ' degress out Humidity is  ' + response.body.current.humidity)
            }
            //)
        })
}
//request({ url: url, json: true }, (error, response) => {
//  console.log(response.body.location.lat)
// console.log(response.body.location.lon)
//console.log('Humidity is =>')
//console.log(response.body.current.humidity)
//})
module.exports = forecast

/*
const forecast = (latitude, longitude, callback) => {
//    const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    console.log("I'm from forecast")
  //  const url = 'http://api.weatherstack.com/current?access_key=0dacb83d02bf50b0544c1afbb9363a6c&query=37.8267,-122.4233'// + latitude + ',' + longitude
    const url = 'http://api.weatherstack.com/current?access_key=0dacb83d02bf50b0544c1afbb9363a6c&query=' + latitude + ',' + longitude
   // http://api.weatherstack.com/current?access_key=0dacb83d02bf50b0544c1afbb9363a6c&query=37.8267,-122.4233
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
          //callback('data -Unable to find location', url)
           callback(undefined, response.body.location.lat)
           //console.log(response.body.location.lat)
           //console.log(response.body.location.lon)
           //console.log('Humidity is =>')
           //console.log(response.body.current.humidity)

        }
    })
}
*/

/*
=================================

const request = require('request')
const geocode = (address, callback) => {
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibmFyZXNoYmFidXAyMSIsImEiOiJjazllaG9xZ2swMGhmM2VwNDFlOTIyMnZlIn0.YukdlFUQGiM8kGNZe-E7bg&limit=1"
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
*/