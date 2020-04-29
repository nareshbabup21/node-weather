//const request = require('request')
////const forecast = require('./forecast')

const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]

//geocode('Hyderabad', (error, data) => {
geocode(address, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)

    forecast(data.latitude, data.longitude, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
    })
})


//
//const url = 'http://api.weatherstack.com/current?access_key=0dacb83d02bf50b0544c1afbb9363a6c&query=37.8267,-122.4233'
//request({ url: url, json: true }, (error, response) => {
  //  console.log(response.body.location.lat)
   // console.log(response.body.location.lon)
    //console.log('Humidity is =>')
    //console.log(response.body.current.humidity)
//})

/*
request({ url: url }, (error, response) => {
   const data = JSON.parse(response.body)
   console.log(data)
   console.log(data.current)
 console.log(data.current.temperature)
console.log(data.location.region)
console.log(error)
})
//*********************
const address2  = 'New York'
const geocodeURL2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address2) + ".json?access_token=pk.eyJ1IjoibmFyZXNoYmFidXAyMSIsImEiOiJjazllaG9xZ2swMGhmM2VwNDFlOTIyMnZlIn0.YukdlFUQGiM8kGNZe-E7bg&limit=1"
console.log('mapbox')
request({ url: geocodeURL2, json: true }, (error, response) => {
const latitude = console.log(response.body.features[0].center[1])
const longitude = console.log(response.body.features[0].center[0])
const place_name = console.log(response.body.features[0].place_name)
})
//************************

//const address2  = 'Boston'
//const geocode = (address2,callback)  => {
//const address = 'New York'
//const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address2) + ".json?access_token=pk.eyJ1IjoibmFyZXNoYmFidXAyMSIsImEiOiJjazllaG9xZ2swMGhmM2VwNDFlOTIyMnZlIn0.YukdlFUQGiM8kGNZe-E7bg&limit=1"
//const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address2 + '.json?access_token=pk.eyJ1IjoibmFyZXNoYmFidXAyMSIsImEiOiJjazllaG9xZ2swMGhmM2VwNDFlOTIyMnZlIn0.YukdlFUQGiM8kGNZe-E7bg&limit=1'
//const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmFyZXNoYmFidXAyMSIsImEiOiJjazllaG9xZ2swMGhmM2VwNDFlOTIyMnZlIn0.YukdlFUQGiM8kGNZe-E7bg&limit=1'
//const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmFyZXNoYmFidXAyMSIsImEiOiJjazllaG9xZ2swMGhmM2VwNDFlOTIyMnZlIn0.YukdlFUQGiM8kGNZe-E7bg&limit=1"
//request({ url: geocodeURL, json: true }, (error, response) => {
//console.log(response.body.features[0].center[1])
//console.log(response.body.features[0].place_name),
//console.log(response.body.features[0].center[0])
//const longitude = console.log(response.body.features[0].center[0])
//})
//}
//request({ url: geocodeURL, json: true }, (error, response) => {
 //   console.log(response.body.features[0].center[1])
//})



//geocode('Philadelphia',(error,data) => {
//if(error){
//callback('Unable to connect to location services', undefined)
//}
//else if (response.body.features.length==0){
// callback('unable to find the location.try another location', undefined)
//}
//else {
// callback(undefined,{
//  latitude: response.body.features[0].center[1],
//  longitude:response.body.features[0].center[0],
//  location:response.body.features[0].place_name
// }
//}
//}
//})
//})
//geocode('Philadelphia',(error,data)) => {
//console.log('Error', error)
//console.log('Data',data)
//})




//}
// Geocoding
// Address -> Lat/Long -> Weather
//const address2  = 'New York'
//const geocodeURL2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address2) + ".json?access_token=pk.eyJ1IjoibmFyZXNoYmFidXAyMSIsImEiOiJjazllaG9xZ2swMGhmM2VwNDFlOTIyMnZlIn0.YukdlFUQGiM8kGNZe-E7bg&limit=1"
//*****************************************************************
//const geocodeURL2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmFyZXNoYmFidXAyMSIsImEiOiJjazllaG9xZ2swMGhmM2VwNDFlOTIyMnZlIn0.YukdlFUQGiM8kGNZe-E7bg&limit=1"
//console.log('mapbox')
//request({ url: geocodeURL2, json: true }, (error, response) => {
//console.log('mapbox')
//  const latitude = console.log(response.body.features[0].center[1])
// const longitude = console.log(response.body.features[0].center[0])
//})

//***********************************************



//http://api.weatherstack.com/current?access_key=0dacb83d02bf50b0544c1afbb9363a6c&query=37.8267,-122.4233

//mapbox.com
/*mapbox token
pk.eyJ1IjoibmFyZXNoYmFidXAyMSIsImEiOiJjazllaG9xZ2swMGhmM2VwNDFlOTIyMnZlIn0.YukdlFUQGiM8kGNZe-E7bg
*/
/*
https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmFyZXNoYmFidXAyMSIsImEiOiJjazllaG9xZ2swMGhmM2VwNDFlOTIyMnZlIn0.YukdlFUQGiM8kGNZe-E7bg

*/

