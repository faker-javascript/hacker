import test from 'ava';
import hacker from './index.js';

test('hacker abbreviation return type to be string', t => {
    t.is(typeof hacker().abbreviation(), 'string');
});

test('hacker adjective return type to be string', t => {
    t.is(typeof hacker().adjective(), 'string');
});

test('hacker ingverb return type to be string', t => {
    t.is(typeof hacker().ingverb(), 'string');
});

test('hacker verb return type to be string', t => {
    t.is(typeof hacker().verb(), 'string');
});

test('hacker noun return type to be string', t => {
    t.is(typeof hacker().noun(), 'string');
});