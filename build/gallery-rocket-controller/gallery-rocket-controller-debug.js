YUI.add('gallery-rocket-controller', function (Y, NAME) {

'use strict';

var Controller = Y.Base.create('rocketController', Y.Base, [Y.REventBroker], {
  destructor: function() {
    this.stopListening();
  }
}, {
  ATTRS: {
  }
});

Y.RController = Controller;


<<<<<<< HEAD
}, 'gallery-2013.08.22-21-03', {"requires": ["gallery-rocket-event-broker"]});
=======
}, 'gallery-2013.09.18-18-49', {"requires": ["gallery-rocket-event-broker"]});
>>>>>>> upstream/master
