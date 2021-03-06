import React from 'react';
import App from './App';
import MainScreen from './src/screens/MainScreen';
import ReferenceScreen from './src/screens/ReferenceScreen';
import ReferenceDetailScreen from './src/screens/ReferenceDetailScreen';
import Header from './src/components/general/Header';
import ListEmpty from './src/components/general/ListEmpty';
import ReferenceCard from './src/components/references/ReferenceCard';
import ReferenceClassDetail from './src/components/references/ReferenceClassDetail';
import Spells from './src/components/references/Spells';

import renderer from 'react-test-renderer';


describe('MainScreen test Suit', () => {
  it('renders MainScreen without crashing', () => {
    const rendered = renderer.create(<MainScreen />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

describe('App test Suit', () => {
  it('renders App without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

describe('ReferenceScreen test Suit', () => {
  it('renders ReferenceScreen without crashing', () => {
    const navigation = {state: {
        params: {
          option: jest.fn()
        }
      },
      setParams: jest.fn()
    }

    const rendered = renderer.create(<ReferenceScreen navigation={navigation} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});


describe('ReferenceDetailScreen test Suit', () => {
  it('renders ReferenceDetailScreen without crashing', () => {
    const navigation = {state: {
        params : {
          detailArg: {
            pageInfo: jest.fn(),
            item: {
              name: jest.fn()
            }
          }
        }
      },
      setParams: jest.fn()
    }

    const rendered = renderer.create(<ReferenceDetailScreen navigation={navigation} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});


describe('Header test Suit', () => {
  it('renders Header without crashing', () => {
    const navigation = {state: jest.fn()}

    const rendered = renderer.create(<Header navigation={navigation} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

describe('ListEmpty test Suit', () => {
  it('renders ListEmpty without crashing', () => {
    // const navigation = {state: jest.fn()}

    const rendered = renderer.create(<ListEmpty />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

describe('ReferenceCard test Suit', () => {
  it('renders ReferenceCard without crashing', () => {
    const rendered = renderer.create(<ReferenceCard />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

describe('ReferenceClassDetail test Suit', () => {
  it('renders ReferenceClassDetail without crashing', () => {
    const item = {item: jest.fn()}

    const rendered = renderer.create(<ReferenceClassDetail item={item} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

describe('Spells test Suit', () => {
  it('renders Spells without crashing', () => {
    const rendered = renderer.create(<Spells />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});