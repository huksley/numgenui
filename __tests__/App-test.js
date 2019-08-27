/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

global.fetch = jest.fn(
  () =>
    new Promise(resolve => {
      resolve({
        status: 201,
        json: () => {
          return Promise.resolve({
            eurojackpot: {
              main: [1, 2, 3, 4, 5],
              secondary: [1, 2],
            },
          });
        },
      });
    }),
);

it('renders correctly', () => {
  renderer.create(<App />);
});
