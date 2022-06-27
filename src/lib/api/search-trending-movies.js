import { API_HOST } from '../../constants/api';
import { movieApiMapper } from '../mappers/movie-api-mapper';

const TRENDING_MOVIES_PATH = '/trending/movie/day';

const searchTredingMovies = async (page) => {
  try {
    const response = await fetch(
      `${API_HOST}${TRENDING_MOVIES_PATH}?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=${page}`
    );

    if (response.ok) {
      const { results: movies, total_pages: totalPages } =
        await response.json();

      return {
        success: true,
        data: {
          movies: movies.map((movie) => movieApiMapper(movie)),
          totalPages,
        },
      };
    }

    return {
      success: false,
      statusCode: response.status,
    };
  } catch (ex) {
    console.log(ex);
    return {
      success: false,
      code: 500,
    };
  }
};

export { searchTredingMovies };
