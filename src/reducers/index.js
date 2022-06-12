export const allStates = {
  redux: 'redux en place',
};

const reducer = (state = allStates, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
