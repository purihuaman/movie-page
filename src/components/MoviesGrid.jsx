import MovieCard from './MovieCard';

const MoviesGrid = ({ movies, loading, error }) => {
	/* NOTE:-> Aquí va un skeleton en lugar del loading guarro esté */
	if (loading) return <p>Cargando....</p>;

	if (error) return <p>{error}</p>;

	return (
		<div className='flex flex-wrap'>
			{movies &&
				movies.map((movie) => (
					<MovieCard
						key={movie.id}
						title={movie.title}
						poster={movie.poster}
						year={movie.year}
						rating={movie.rating}
					/>
				))}
		</div>
	);
};

export default MoviesGrid;
