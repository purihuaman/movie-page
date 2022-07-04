import { API_POSTER_HOST } from '../constants/api';

const MovieCard = ({ title, poster, year, rating }) => {
	return (
		<article className='w-1/5 p-2'>
			<div
				style={{
					backgroundImage: `url(${API_POSTER_HOST}${poster})`,
				}}
				className='relative aspect-2/3 bg-cover bg-center bg-no-repeat overflow-hidden rounded bg-gray'
			>
				<h3 className='absolute bottom-0 w-full bg-bg-700 p-2'>{title}</h3>
				<span className='absolute top-2 left-2 py-1 px-2 bg-primary'>
					{rating}
				</span>
				<span className='absolute top-2 right-2 py-1 px-2 bg-bg-700'>
					{year}
				</span>
			</div>
		</article>
	);
};

export default MovieCard;
