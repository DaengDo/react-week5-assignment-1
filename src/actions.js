import {
  fetchRegions,
  fetchCategories,
} from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function selectRegion(regionId) {
  return {
    type: 'selectRegion',
    payload: { regionId },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function selectCategory(categoryId) {
  return {
    type: 'selectCategory',
    payload: { categoryId },
  };
}

export function loadInitialData() {
  return async (dispatch) => {
    // call api for getting regions
    const regions = await fetchRegions();
    // call api for getting categories
    const categories = await fetchCategories();

    dispatch(setRegions(regions));
    dispatch(setCategories(categories));
  };
}
