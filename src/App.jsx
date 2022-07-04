import MoviesGrid from './components/MoviesGrid';
import Pagination from './components/Pagination';
import { useMoviesInfo } from './lib/hooks/use-movies-info';

const App = () => {
	const {
		movies,
		totalPages,
		searchTerm,
		page,
		error,
		loading,
		setSearchTerm,
		setPage,
	} = useMoviesInfo();

	return (
		<div className='container container-xl mx-auto'>
			<div className='flex justify-between items-center p-4'>
				<input
					type='text'
					onChange={(ev) => setSearchTerm(ev.target.value)}
					value={searchTerm}
					className='py-2 px-4 bg-transparent border border-color:gray rounded-md'
					placeholder='Buscar...'
				/>

				<Pagination page={page} totalPages={totalPages} setPage={setPage} />
			</div>

			<MoviesGrid movies={movies} loading={loading} error={error} />
		</div>
	);
};

export default App;
