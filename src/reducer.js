export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE after finished developing
  //token:
  //"BQAr2G2GQAku9AIM3IOpRvn2Q_pto7CLvhN6OM100fdCHG1-oATEvERJFPaTPHI1zBMAVwMLAV2R5PWnKzqQfoNPmw8K9SYjlqMQXOxz-FqhYvxyTRmtsJfPRasOf40GRGCLZ13cwk3QtIFu061qqovTYfZ4mAilBGZOHA0z_5Q0ho79D4Rl",
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
