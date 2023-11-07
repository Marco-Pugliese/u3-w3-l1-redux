import { ADD_TO_FAV, REMOVE_TO_FAV } from "../actions";
const initialState = {
  content: [],
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_TO_FAV:
      return {
        ...state,
        content: [
          ...state.content.filter(
            (singleElement) => singleElement._id !== action.payload._id
          ),
        ],
      };
    default:
      return state;
  }
};
export default list;
