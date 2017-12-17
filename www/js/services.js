angular.module('starter.services', [])

.factory('Events', function() {

   var events = [{
    title: "Do some development",
    start: '2017-12-12',
    end: '2017-12-22'

  }, {
    title: "Wave",
    start: '2017-12-09',
    end: '2017-12-10'
  },
{
  title: "Today",
  start: "2017-12-19",
  end: "2017-12-20"
}];

  return {
    all: function() {
      return events;
    },
    remove: function(event) {
      events.splice(events.indexOf(event), 1);
    },
    add: function(event){
      events.push(event);
    },
    get: function(eventId) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(eventId)) {
          return events[i];
        }
      }
      return null;
    }
  };
});
