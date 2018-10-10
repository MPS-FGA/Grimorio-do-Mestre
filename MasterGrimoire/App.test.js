import React from 'react';
import App from './App';
import MainScreen from './src/screens/MainScreen';
import ContentList from './src/screens/ContentList';
import MENU_ITENS from './src/constants/menuItens';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders MainScreen without crashing', () => {
  const rendered = renderer.create(<MainScreen />).toJSON();
  console.log(rendered);
  expect(rendered).toBeTruthy();
});
