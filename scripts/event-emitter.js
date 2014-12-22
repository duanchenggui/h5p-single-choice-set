var H5P = H5P || {};


/**
 * SingleChoiceEventEmitter makes it possible for other classes to
 * trigger and listen to events
 */
H5P.SingleChoiceEventEmitter = (function () {

  /**
   * @constructor
   */
  function EventEmitter() {
    this.listeners = {};
  }

  /**
   * EventEmitter.prototype.on - Register a listener
   *
   * @param  {string} type        The name of the event
   * @param  {function} listener  The function to call when event is triggered
   */
  EventEmitter.prototype.on = function(type, listener) {
    if (typeof listener === 'function') {
      if (this.listeners[type] === undefined) {
        this.listeners[type] = [];
      }
      this.listeners[type].push(listener);
    }
  };


  /**
   * EventEmitter.prototype.off - Unregister a listener
   *
   * @param  {string} type        The name of the event
   * @param  {function} listener  The function to unregister
   */
  EventEmitter.prototype.off = function (type, listener) {
    if (this.listeners[type] !== undefined) {
      var removeIndex = listeners[type].indexOf(listener);
      if (removeIndex) {
        listeners[type].splice(removeIndex, 1);
      }
    }
  };

  /**
   * EventEmitter.prototype.trigger - Trigger an event
   *
   * @param  {string} type  The name of the event
   * @param  {object} event Object data
   */   
  EventEmitter.prototype.trigger = function (type, event) {
    if (event === null) {
      event = {};
    }

    if (this.listeners[type] !== undefined) {
      for (var i = 0; i < this.listeners[type].length; i++) {
        this.listeners[type][i](event);
      }
    }
  };

  return EventEmitter;
})();
