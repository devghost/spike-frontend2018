import test from 'ava';
import { mathMagic } from './../../app/common/simulation.js';

test('👀 foo', t => {
  t.pass();
});

test('👀 bar', async t => {
  const bar = Promise.resolve('bar');

  t.is(await bar, 'bar');
});

test.todo('very important test we need to write');

test('mathMagic', t => {
  var res = mathMagic(2);

  t.is(res, 4);
});

// See: 'some link to vsts backlog item'
test.failing('BUG: mathMagic, weird rounding err', t => {
  var res = mathMagic(3);

  t.is(res, -1.0001);
});
