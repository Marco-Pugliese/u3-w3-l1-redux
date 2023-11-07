import { GET_FETCH } from "../actions";
const initialState = {
  jobs: [],
};

const myFetch = (state = initialState, action) => {
  switch (action.type) {
    case GET_FETCH:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};
export default myFetch;
