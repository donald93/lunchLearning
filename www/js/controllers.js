angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) { })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })

  .controller('CalendarController', function ($scope, Events, $ionicModal) {
    $scope.newEvent = {};
    $ionicModal.fromTemplateUrl('/templates/add-event-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.dayClick = function (date, jsEvent, view) {
      $scope.newEvent.date = date.add(1, 'd').toDate();
      $scope.modal.show();
    };

    $scope.uiConfig = {
      calendar: {
        height: 450,
        editable: true,
        header: {
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        dayClick: $scope.dayClick
      }
    };

    var events = Events.all();
    $scope.eventSources = [{
      events: events,
      color: 'green',
      textColor: 'yellow'
    },
    ];

    $scope.CloseModal = function()
    {
      $scope.newEvent = {};
      if($scope.modal)
      {
        $scope.modal.hide();
      }
    };

    $scope.AddEvent = function(newEvent)
    {
      if(event.allDay)
      {
        event.time = "";
      }
      Events.add(newEvent);
      $scope.newEvent = {};
      $scope.modal.hide();
    };

  })

  .controller('TodayController', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })

  .controller('UpcomingController', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })
  ;
