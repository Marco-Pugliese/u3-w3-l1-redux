const initialState = {
  fav: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_to_fav":
      return {
        ...state,
        fav: {
          ...state.fav,
          content: [...state.fav.content, action.payload],
        },
      };
    case "remove_element":
      return {
        ...state,
        fav: {
          ...state.fav,
          content: [
            ...state.fav.content.map(
              (singleElement) => singleElement._id !== action.payload._id
            ),
          ],
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
