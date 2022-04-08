const initialState = {
  spaces: [],
  detailPage: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "setAllSpaces":
      return { ...state, spaces: action.payload };

    case "setDetailPage":
      console.log("action", action);
      return { ...state, detailPage: action.payload };

    default:
      return state;
  }
}
