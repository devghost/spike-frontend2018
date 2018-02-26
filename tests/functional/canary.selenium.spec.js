import test from 'ava';

const webdriverio = require('webdriverio');

const client = webdriverio.remote({
  // just using a local chromedriver
  desiredCapabilities: { browserName: 'chrome' }
});

test.before(async () => client.init().url('http://localhost:1234/'));

test.after.always(async () => client.end());

test('has a body', t =>
  client.isExisting('body').then(result => t.true(result)));

test('has a header', t =>
  client.isExisting('h1').then(result => t.true(result)));
