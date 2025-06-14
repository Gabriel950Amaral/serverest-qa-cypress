const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const webpack = require('webpack');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = {
  module: {
    rules: [
      {
        test: /\.feature$/,
        use: [
          {
            loader: '@badeball/cypress-cucumber-preprocessor/webpack',
            options: {
              // You can add options here if needed
            },
          },
        ],
      },
    ],
  },
};
