export const AppReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_URL":
      return {
        ...state,
        URL: action.payload,
      };
    default:
      return state;
  }
};
