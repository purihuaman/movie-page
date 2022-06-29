import MoviesGrid from './components/MoviesGrid';
import { useMoviesInfo } from './lib/hooks/use-movies-info';

const App = () => {
	const { movies, searchTerm, page, error, loading, setSearchTerm, setPage } =
		useMoviesInfo();

	return (
		<>
			<input
				type='text'
				value={searchTerm}
				onChange={(ev) => setSearchTerm(ev.target.value)}
				className='text-blue-500'
				placeholder='Buscar...'
			/>

			<MoviesGrid movies={movies} loading={loading} error={error} />

			<button
				onClick={() => setPage(page + 100)}
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
			>
				Página {page}
			</button>
		</>
	);
};

export default App;
