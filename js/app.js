$(document).ready(function() {

  getUserData(users[0]);
  getUserData(users[1]);

});

var twitchURL = "http://twitch.tv/"
var users = ["ESL_SC2", "freecodecamp"];
var state = [];
function getUserData(user) {
  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/'+user+'?callback=?', function(data1) {
    console.log("Channel Data: ", data1);
      $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+user+'?callback=?', function(data2) {
        console.log("Stream Data: ", data2);
          $.getJSON('https://wind-bow.gomix.me/twitch-api/users/'+user+'?callback=?', function(data3) {
            console.log("User Data: ", data3);
            state.push({
              logo: data3.logo,
              name: user,
              online: data1.partner,
              status: data1.status
            });
            console.log(state);
          });
      });
  });
}
