const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback - ', args);
};
emitter.on('josephine', callback1);

emitter.on('josephine', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('josephine', { message: 1 });
emitter.emit('josephine', { message: 2 });
// emitter.removeListener('josephine', callback1);
emitter.removeAllListeners();
emitter.emit('josephine', { message: 3 });
