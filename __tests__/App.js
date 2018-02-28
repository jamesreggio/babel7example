import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  // Use some of those sweet new JavaScript features in our tests.
  const nothing = null;
  const something = nothing ?? {foo: 42};
  const nothingAgain = something?.foo?.bar;

  const tree = renderer.create(
    <App />
  );
});
