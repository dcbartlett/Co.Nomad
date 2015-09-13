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
      face: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png",
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
      face: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png",
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
      face: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png",
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
      face: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png",
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
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, 
    {
      name: {
        first: "Tenjin",
        last: ""
      },
      lastText: 'Hey, it\'s me',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, 
    {
      name: {
        first: "Sophia",
        last: ""
      },
      lastText: 'I should buy a boat',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    },
    { 
      name: {
        first: "Odin",
        last: ""
      },
      lastText: 'Look at my mukluks!',
      face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
    }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
