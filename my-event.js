const EventEmitter = require('events');
const emitter = new EventEmitter();

//////Case1///////
console.log('\nCase 1');
// emitter.addListener('myEvent',function(args){
emitter.on('myEvent1',function(args){
    console.log('Hello I found you: myEvent');
});
emitter.emit('myEvent1');

//////Case2///////
console.log('\nCase 2');
emitter.on('myEvent2', function(args) {
    console.log('You met myEvent with: ', args);
});
emitter.emit('myEvent2', { id: 28, name: 'Karn' });

//////Case3///////
console.log('\nCase 3');
emitter.on('myEvent3', function(args) {
    console.log('You met myEvent with: ', args);
});
emitter.emit('myEvent3', { id: 28, name: 'Karn' });
emitter.emit('myEvent3', { type: 'response', content_type: 'text/html', Header: '200 OK' });