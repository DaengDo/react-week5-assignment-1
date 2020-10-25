import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';
import restaurants from '../__fixtures__/restaurants';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

import {
  loadRegions,
  loadCategories,
  loadRestaurants,
  setRegions,
  setCategories,
  setRestaurants,
} from './actions';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  describe('loadRegions', () => {
    it('dispatches fetched regions data', async () => {
      fetchRegions.mockResolvedValue(regions);

      const store = mockStore({});

      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions(regions));
    });
  });

  describe('loadCategories', () => {
    it('dispatches fetched categories data', async () => {
      fetchCategories.mockResolvedValue(categories);

      const store = mockStore({});

      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories(categories));
    });
  });

  describe('loadRestaurants', () => {
    context('with region name and category id', () => {
      it('dispatches fetched restaurants data', async () => {
        fetchRestaurants.mockResolvedValue(restaurants);

        const store = mockStore({
          selectedCategory: 1,
          selectedRegion: '서울',
        });

        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants(restaurants));
      });
    });

    context('without region name or category id', () => {
      it('dispatches nothing', async () => {
        const selectedCategory = '';

        const store = mockStore({
          selectedCategory,
          selectedRegion: '서울',
        });

        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });
});