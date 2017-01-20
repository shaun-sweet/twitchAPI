$(document).ready(function() {
  getChannelData("freecodecamp");
  getStreamData("freecodecamp");
  getUserData("freecodecamp");
});

function getChannelData(user) {
  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/'+user+'?callback=?', function(data) {
    console.log("Channel Data: ", data);
  });
}

function getStreamData(user) {
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+user+'?callback=?', function(data) {
    console.log("Stream Data: ", data);
  });
}

function getUserData(user) {
  $.getJSON('https://wind-bow.gomix.me/twitch-api/users/'+user+'?callback=?', function(data) {
    console.log("User Data: ", data);
  });
}
