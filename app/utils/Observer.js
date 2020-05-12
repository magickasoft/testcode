import R from 'ramda';

class Observer {
  constructor() {
    this.subscribers = {};
  }

  subscribe = (type, fn) => {
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [];
    }

    this.subscribers[type].push(fn);
  };

  send = (type, data) => {
    if (typeof this.subscribers[type] !== 'undefined') {
      const func = (el) => {
        el(data);
      };

      R.forEach(func, this.subscribers[type]);
    }
  };
}

export default Observer;
