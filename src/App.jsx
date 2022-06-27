import MovieCard from './components/MovieCard';
import { useMoviesInfo } from './lib/hooks/use-movies-info';

const App = () => {
  const { movies, page, error, loading, setPage } = useMoviesInfo();

  /* NOTE:-> Aquí va un skeleton en lugar del loading guarro esté */
  if (loading) return <p>Cargando....</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <p>movies</p>

      {movies && <MovieCard movies={movies} />}

      <button
        onClick={() => setPage(page + 100)}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
      >
        Página {page}
      </button>
    </div>
  );
};

export default App;
