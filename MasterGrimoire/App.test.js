import React from 'react';
import App from './App';
import MainScreen from './src/screens/MainScreen';
import ReferenceScreen from './src/screens/ReferenceScreen';
import ReferenceDetailScreen from './src/screens/ReferenceDetailScreen';
// import SpellsListPage from './src/screens/SpellsListPage';

import renderer from 'react-test-renderer';

describe('MainScreen test Suit', () => {
  it('renders MainScreen without crashing', () => {
    const rendered = renderer.create(<MainScreen />).toJSON();
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

/*
describe('SpellsListPage test Suit', () => {
  it('renders SpellsListPage without crashing', () => {
    const navigation = {state: {
        params : {
          option : jest.fn()
        }
      },
      setParams: jest.fn()
    }

    const rendered = renderer.create(<SpellsListPage navigation={navigation} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
*/