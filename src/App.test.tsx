import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';
// import App from './App';

test('renders without crashing', () => {
  const { baseElement } = render(<Main />);
  expect(baseElement).toBeDefined();
});
