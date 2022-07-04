const MOVIES_INFO_INITIAL_STATE = {
	movies: [],
	searchTerm: '',
	page: 1,
	totalPages: 1,
	error: undefined,
	loading: false,
};

const MOVIES_INFO_ACTIONS = {
	SEARCH_START: 0,
	SEARCH_SUCCESS: 1,
	SEARCH__ERROR: 2,
	SET_PAGE: 3,
	SET_SEARCH_TERM: 4,
};

/* NOTE:-> CREANDO USEREDUCER */
/* FIXME: Siempre tiene que retornar el nuevo estado
  state: Almacena el estado anterior
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
				totalPages: action.totalPages,
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

		case MOVIES_INFO_ACTIONS.SET_SEARCH_TERM:
			return { ...state, searchTerm: action.searchTerm };

		default:
			throw new Error('Invalid action');
	}
};

export { MOVIES_INFO_INITIAL_STATE, MOVIES_INFO_ACTIONS, moviesInfoReducer };
