angular.module('starter.controllers', [])

.controller('TabCtrl', function($scope, $mdBottomSheet) {
  $scope.closeSheets = $mdBottomSheet.hide;
})

.controller('DashCtrl', function($scope, $ionicLoading,  $mdBottomSheet, $timeout, Checkins) {

  var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

  var mapOptions = {
    center: myLatlng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  $ionicLoading.show({
    // template: '<img src="img/loading.gif" />',
    template: '<md-progress-circular md-mode="indeterminate" md-diameter="70"></md-progress-circular>',
    hideOnStateChange: true
  });
  navigator.geolocation.getCurrentPosition(function(pos) {
    map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
    // TODO: Get markers nearby.
    var loading = true;
    Checkins.all(pos.coords.latitude, pos.coords.longitude).forEach(function(checkin) {
      if (loading) {
        $ionicLoading.hide();
        loading = false;
      }
      var marker = new google.maps.Marker({
          position: checkin.location,
          map: map
      });
      marker.addListener('mouseup', function() {
        map.setCenter(marker.getPosition());
        $mdBottomSheet.show({
          templateUrl: 'templates/checkin-detail.html',
          controller: function ($scope) {
            $scope.checkin = checkin;
          },
          parent: angular.element(document.querySelector('#bottomSheet'))
        });
      });
    });
  });

  $scope.openCheckin = function() {
    $mdBottomSheet.show({
      templateUrl: 'templates/checkin-form.html',
      controller: function ($scope) {
      },
      parent: angular.element(document.querySelector('#bottomSheet'))
    });
  };

  $scope.map = map;
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get(0);
  $scope.chat2 = Chats.get(1);
})

.controller('AccountCtrl', function($scope, Chats) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.chat = Chats.get(0);
});
