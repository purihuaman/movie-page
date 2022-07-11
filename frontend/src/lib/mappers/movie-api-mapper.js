import { API_POSTER_HOST, API_POSTER_LANDSCAPE } from '../../constants/api';
import { GENRES } from '../../constants/genres';

export const movieApiMapper = (movieApiObject) => ({
	id: movieApiObject.id,
	title: movieApiObject.title,
	description: movieApiObject.overview,
	poster: `${API_POSTER_HOST}${movieApiObject.poster_path}`,
	landscapeImage: `${API_POSTER_LANDSCAPE}${movieApiObject.backdrop_path}`,
	year: new Date(movieApiObject.release_date).getFullYear(),
	rating: movieApiObject.vote_average,
	genres: movieApiObject.genre_ids
		.map((genreId) => GENRES[genreId])
		.filter((g) => g),
});