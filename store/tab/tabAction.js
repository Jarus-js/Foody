export const setSelectedTab = (selectedTab) => {
  return (dispatch) => {
    dispatch({
      type: "SET_SELECTED_TAB",
      payload: { selectedTab },
    });
  };
};
