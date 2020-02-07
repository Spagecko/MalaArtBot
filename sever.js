const Discord = require('discord.js');
const bot = new Discord.Client();
const firebase = require("firebase");

const TOKEN = "NDc3MTQ4OTU0NTcyNzUwODQ4.Dk37UA.5IMr9NamZ2SupzvreFXLDeGjhMU";

var config = {
     // this is censored to ensure privacy
    apiKey: ,
    authDomain:
    databaseURL: 
    projectId: 
    storageBucket: 
    messagingSenderId: 
    // this is censored to ensure privacy
  };
  firebase.initializeApp(config);

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var database = firebase.database();
  var ref = database.ref('artimg');
  var ref2 = database.ref('artistinfo');
  var refE = database.ref('printerror');
  var ref3 = database.ref('artimg2');

console.log("Mala Printer ready");


bot.on('message', function(message){
  
  
  
  if (message.content === '!art')
  {
      var randErrorDetermind = Math.floor((Math.random() * 10) + 1);
     if(randErrorDetermind  > 2){
      
    
    ref3.on('value',randomdata2, errData);
    function randomdata2(data)
    {
      var indexPointer = data.val(); 
      var indexKeys = Object.keys(indexPointer );
      var keysLength = indexKeys.length;
      var randomArt2 = Math.floor((Math.random() * keysLength) + 1);
      var randomInfo = indexPointer[randomArt2];
      
      
      console.log(randomArt2);
      console.log(randomInfo.artist);
      console.log(randomInfo.img);
      console.log(randomInfo.info);
      
      let botemBed = new Discord.RichEmbed()
      .setTitle('By ' + randomInfo.artist)
      .setColor([10, 205, 254])
      .setImage(randomInfo.img)
      .setDescription(randomInfo.info);
        message.channel.sendMessage(botemBed);
    }
     }
        else{
      refE.on('value',randomError, errData);
      function randomError(data)
      {
        console.log(randErrorDetermind);
        console.log('false');
        var errorMsgs = data.val();
        var errorKeys = Object.keys(errorMsgs);
        var errorIndex  = errorKeys.length; 
        var randomErrorIndex = Math.floor((Math.random() * errorIndex) + 1);
        console.log(randomErrorIndex);
        console.log(errorMsgs[randomErrorIndex]);
        var sendError = JSON.stringify(errorMsgs[randomErrorIndex]); 
        message.channel.sendMessage(sendError);
        
      }
      
    }
    
  }
  //message starts with]

});


function errData(err){
  console.log('Error!');
  console.log(err);
}


  bot.login(TOKEN);
