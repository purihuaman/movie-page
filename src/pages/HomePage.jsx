import { useState } from 'react';
import Modal from '../components/Modal';
import MoviePreview from '../components/MoviePreview';
import MoviesGrid from '../components/MoviesGrid';
import Pagination from '../components/Pagination';
import { useMoviesInfo } from '../lib/hooks/use-movies-info';

const HomePage = () => {
	const [previewMovie, setPreviewMovie] = useState();

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
		<div className='container mx-auto'>
			<div className='sticky top-0 z-10 flex justify-between items-center flex-wrap p-4 bg-bg'>
				<input
					type='text'
					onChange={(ev) => setSearchTerm(ev.target.value)}
					value={searchTerm}
					className='py-2 px-4 bg-transparent border border-color:gray rounded-md'
					placeholder='Buscar...'
				/>

				<Pagination page={page} totalPages={totalPages} setPage={setPage} />
			</div>

			<MoviesGrid
				movies={movies}
				loading={loading}
				error={error}
				setPreviewMovie={setPreviewMovie}
			/>

			{previewMovie && (
				<Modal closeModal={() => setPreviewMovie()}>
					<MoviePreview {...previewMovie} />
				</Modal>
			)}
		</div>
	);
};

export default HomePage;
