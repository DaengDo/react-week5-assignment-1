const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selected: {
    region: {
      id: '',
      name: '',
    },
    category: {
      id: '',
      name: '',
    },
  },
};

const reducers = {
  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions: [...state.regions, ...regions],
  }),
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories: [...state.categories, ...categories],
  }),
  setRestaurants: (state, { payload: { restaurants } }) => ({
    ...state,
    restaurants: [...restaurants],
  }),
  setSelected: (state, { payload: { selected } }) => ({
    ...state,
    selected: {
      region: selected.region,
      category: selected.category,
    },
  }),
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}