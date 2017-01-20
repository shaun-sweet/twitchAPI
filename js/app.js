$(document).ready(function() {
  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/freecodecamp?callback=?', function(data) {
    console.log(data);
  });
});
// https://api.twitch.tv/kraken/channels/freecodecamp
