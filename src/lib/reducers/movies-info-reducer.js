const MOVIES_INFO_INITIAL_STATE = {
  movies: [],
  page: 1,
  error: undefined,
  loading: false,
};

const MOVIES_INFO_ACTIONS = {
  SEARCH_START: 0,
  SEARCH_SUCCESS: 1,
  SEARCH__ERROR: 2,
  SET_PAGE: 3,
};

/* NOTE:-> CREANDO USEREDUCER */
/* FIXME: Siempre tiene que retornar el nuevo estado
  state: Almacena el estadio anterior
  action: Tenemos (type y arc)
*/
const moviesInfoReducer = (state, action) => {
  switch (action.type) {
    case MOVIES_INFO_ACTIONS.SEARCH_START:
      return {
        ...state,
        error: undefined,
        loading: true,
      };
    case MOVIES_INFO_ACTIONS.SEARCH_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        error: undefined,
        loading: false,
      };
    case MOVIES_INFO_ACTIONS.SEARCH__ERROR:
      return {
        ...state,
        movies: [],
        error: action.error,
        loading: false,
      };
    case MOVIES_INFO_ACTIONS.SET_PAGE:
      return { ...state, page: action.page };
    default:
      throw new Error('Invalid action');
  }
};

export { MOVIES_INFO_INITIAL_STATE, MOVIES_INFO_ACTIONS, moviesInfoReducer };
