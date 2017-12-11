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
  start: "2017-12-10",
  end: "2017-12-11"
}];

  return {
    all: function() {
      return events;
    },
    remove: function(event) {
      events.splice(events.indexOf(event), 1);
    },
    add: function(event){
      cordova.plugins.notification.local.schedule({
        id: event.date.getTime(),
        title: event.title,
        text: "Hey I'm your phone are you listening?",
        trigger: { at: event.date}
    });
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
