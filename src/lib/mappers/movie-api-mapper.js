import { API_POSTER_HOST } from '../../constants/api';

export const movieApiMapper = (movieApiObject) => ({
  id: movieApiObject.id,
  title: movieApiObject.title,
  poster: `${API_POSTER_HOST}${movieApiObject.poster_path}`,
  year: new Date(movieApiObject.release_date).getFullYear(),
  rating: movieApiObject.vote_average,
});
