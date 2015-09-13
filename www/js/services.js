angular.module('starter.services', [])

.factory('Checkins', function () {
  // Might use a resource here that returns a JSON array

  var self = this;
  // Some fake testing data
  self.latitude = null;
  self.longitude = null;
  self.checkins = function() {
    return [{ 
      name: {
        first: "Minerva",
        last: ""
      },
      location: new google.maps.LatLng(this.latitude + .0005,this.longitude + .0005),
      locationName: "Easy Tiger",
      career: "Designer",
      face: '../img/minerva_headshot.jpg',
      more: "This is something a little bit more about me."
    },
    { 
      name: {
        first: "Tenjin",
        last: ""
      },
      location: new google.maps.LatLng(this.latitude - .0005,this.longitude + .0005),
      locationName: "Texas State Capital",
      career: "Artist",
      face: '../img/tenjin_headshot.jpg',
      more: "This is something a little bit more about me."
    },
    { 
      name: {
        first: "Sophia",
        last: ""
      },
      location: new google.maps.LatLng(this.latitude + .0005,this.longitude - .0005),
      locationName: "Omni Hotel",
      career: "Writer",
      face: '../img/sophia_headshot.jpg',
      more: "This is something a little bit more about me."
    },
    { 
      name: {
        first: "Odin",
        last: ""
      },
      location: new google.maps.LatLng(this.latitude - .0005,this.longitude - .0005),
      locationName: "Library on 6th",
      career: "Musician",
      face: '../img/odin_headshot.jpg',
      more: "This is something a little bit more about me."
    }];
  };

  return {
    all: function(latitude, longitude) {
      self.latitude = latitude;
      self.longitude = longitude;
      return self.checkins();
    }
  };
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
      name: {
        first: "Minerva",
        last: ""
      },
      lastText: 'You on your way?',
      face: '../img/minerva_headshot.jpg'
    }, 
    {
      name: {
        first: "Tenjin",
        last: ""
      },
      lastText: 'Hey, it\'s me',
      face: '../img/tenjin_headshot.jpg'
    }, 
    {
      name: {
        first: "Sophia",
        last: ""
      },
      lastText: 'I should buy a boat',
      face: '../img/sophia_headshot.jpg'
    },
    { 
      name: {
        first: "Odin",
        last: ""
      },
      lastText: 'Look at my mukluks!',
      face: '../img/odin_headshot.jpg'
    }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      return chats[chatId];
    }
  };
});
