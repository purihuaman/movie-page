import { useEffect, useReducer, useRef } from 'react';
import {
	moviesInfoReducer,
	MOVIES_INFO_ACTIONS,
	MOVIES_INFO_INITIAL_STATE,
} from '../reducers/movies-info-reducer';

import { searchMoviesApi } from '../api/search-movie-api';

const searchMovies = async (
	search,
	page,
	searchStart,
	searchSuccess,
	searchError
) => {
	/* NOTE:-> Mejorado */

	/* FIXME: Start search */
	searchStart();

	const { success, data, statusCode } = await searchMoviesApi(search, page);

	if (success)
		searchSuccess(data.movies, data.totalPages); /* FIXME: Search success */
	else searchError(`Error: ${statusCode}`); /* FIXME: Search error */

	/* NOTE:-> Antes */
	// setLoading(true);
	// const { success, data, statusCode } = await searchTredingMoviesApi(page);
	// if (success) setMovies(data.movies);
	// else {
	//   setMovies();
	//   setError(`Error: ${statusCode}`);
	// }
	// setLoading(false);
};

const useMoviesInfo = () => {
	const [moviesInfo, setMoviesInfo] = useReducer(
		moviesInfoReducer,
		MOVIES_INFO_INITIAL_STATE
	);

	const isInitialzed = useRef(false);
	// const [moviesInfo, setMoviesInfo] = useReducer(moviesInfoReducer, {
	//   movies: [],
	//   page: 1,
	//   error: undefined,
	//   loading: false,
	// });

	const searchStart = () =>
		setMoviesInfo({ type: MOVIES_INFO_ACTIONS.SEARCH_START });

	const searchSuccess = (movies, totalPages) =>
		setMoviesInfo({
			type: MOVIES_INFO_ACTIONS.SEARCH_SUCCESS,
			movies,
			totalPages,
		});

	const searchError = (error) =>
		setMoviesInfo({ type: MOVIES_INFO_ACTIONS.SEARCH__ERROR, error });

	const setSearchTerm = (newSearchTerm) =>
		setMoviesInfo({
			type: MOVIES_INFO_ACTIONS.SET_SEARCH_TERM,
			searchTerm: newSearchTerm,
		});

	const setPage = (newPage) =>
		setMoviesInfo({ type: MOVIES_INFO_ACTIONS.SET_PAGE, page: newPage });

	useEffect(() => {
		const searchTimeout = () =>
			searchMovies(
				moviesInfo.searchTerm,
				moviesInfo.page,
				searchStart,
				searchSuccess,
				searchError
			);

		if (!isInitialzed.current) {
			searchTimeout();
		} else {
			const timeoutID = setTimeout(() => searchTimeout, 200);
			return () => clearInterval(timeoutID);
		}
	}, [moviesInfo.searchTerm, moviesInfo.page]);

	return { ...moviesInfo, setSearchTerm, setPage };
};

// const useMoviesInfo = () => {
//   /* NOTE:-> Mejorado con un solo estado */
//   const [moviesInfo, setMoviesInfo] = useState({
//     movies: [],
//     page: 1,
//     error: undefined,
//     loading: false,
//   });

//   const searchStart = () => {
//     setMoviesInfo({
//       ...moviesInfo,
//       error: undefined,
//       loading: true,
//     });
//   };

//   const searchSuccess = (movies) => {
//     setMoviesInfo({
//       ...moviesInfo,
//       movies,
//       error: undefined,
//       loading: true,
//     });
//   };

//   const searchError = (error) =>
//     setMoviesInfo({
//       ...moviesInfo,
//       movies: [],
//       error,
//       loading: true,
//     });

//   const setPage = (newPage) => {
//     setMoviesInfo((preveState) => ({ ...preveState, page: newPage }));
//   };

//   useEffect(() => {
//     searchTrending(moviesInfo.page, searchStart, searchSuccess, searchError);
//   }, [moviesInfo.page]);

//   return { ...moviesInfo, setPage };

//   /* NOTE:-> Antes con estados individuales */
//   // const [movies, setMovies] = useState([]);
//   // const [page, setPage] = useState(1);
//   // const [error, setError] = useState();
//   // const [loading, setLoading] = useState(false);

//   // useEffect(() => {
//   //   searchTrending(page, setMovies, setError, setLoading);
//   // }, [page]);

//   // return { movies, page, error, loading, setPage };
// };

export { useMoviesInfo };
