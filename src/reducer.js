export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQCFkKaD0P4B30Acv1Gc0ypwlpQ2axnjnHuCOS9MOW9emOJkjBu_KU7C3ioRqDtBJ3dMFnpWhzystxkoaohfP1uMytD2LshhTt5gkZ70poBj71biOJgLV - 0j8s018ergpqN1YqWdBUS- tzlrUkqjN1i5JED6_eMtLFIF0zcA5vnuCI_AoWJYGvVo",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
