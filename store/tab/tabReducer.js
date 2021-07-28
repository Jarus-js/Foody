const initialState = {
  selectedTab: "",
};

const tabReducer = (state = initialState, action) => {
  console.log("selectedTabState", state);
  switch (action.type) {
    case "SET_SELECTED_TAB":
      return {
        ...state,
        selectedTab: action.payload.selectedTab,
      };
    default:
      return state;
  }
};

export default tabReducer;
