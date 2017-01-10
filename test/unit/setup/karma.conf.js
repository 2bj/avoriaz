const webpackConfig = require('./webpack.config.test.js');

module.exports = function karmaConfig(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    reporters: ['spec', 'coverage'],
    files: ['../specs/*.{vue,js}'],
    preprocessors: {
      '../specs/*.{vue,js}': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
      ],
    },
  });
};
