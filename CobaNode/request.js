// const request = require('request')
// const url =
// 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'
// request({ url: url, json: true }, (error, response) => {
//  // Parse the response body from JSON string into JavaScript object
//  const data = JSON.parse(response.body)
//  // Will print the current temperature to the console
//  console.log(data.currently.temperature)
// })  

import request from './package-lock.json'
const url =
'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'
request({ url: url, json: true }, (error, response) => {
 // Parse the response body from JSON string into JavaScript object
 const data = JSON.parse(response.body)
 // Will print the current temperature to the console
 console.log(data.currently.temperature)
    console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
})