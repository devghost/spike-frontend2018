module.exports = (wallaby) => {
  return {
    files: [
    	'app/**/*.js',
    	'!app/**/*.spec.js'
    ],
    tests: [
      'tests/**/*.spec.js'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    testFramework: 'ava',

    setup: function () {
      require('babel-polyfill');
    },
    debug: true
  };
};