angular.module('starter.controllers', [])
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

    $scope.CloseModal = function () {
      $scope.newEvent = {};
      if ($scope.modal) {
        $scope.modal.hide();
      }
    };

    $scope.AddEvent = function (newEvent) {
      if (event.allDay) {
        event.time = "";
      }
      Events.add(newEvent);
      $scope.newEvent = {};
      $scope.modal.hide();
    };

  })

  .controller('TodayController', function ($scope, Events) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    function doesEventTakePlaceToday(e) {
      if(e.date)
      {
        var temp = new Date(e.date);
        temp.setHours(0, 0, 0, 0);

        return temp.getTime() == today.getTime();
      }
      return new Date(e.start) <= today && new Date(e.end) >= today;
    }

    var unfilteredEvents = Events.all();
    $scope.events = unfilteredEvents.filter(doesEventTakePlaceToday);

  });
