import { API_POSTER_HOST } from '../constants/api';

const MovieCard = ({ title, poster, year, rating }) => {
	return (
		<article className='w-1/4 p-4'>
			<div>
				<img
					src={`${API_POSTER_HOST}${poster}`}
					alt={title}
					className='w-full block'
				/>

				<h3>{title}</h3>
				<span className='mr-2'>{rating}</span>
				<span>{year}</span>
			</div>
		</article>
	);
};

export default MovieCard;
