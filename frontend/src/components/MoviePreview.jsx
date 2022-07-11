const MoviePreview = ({
	title,
	image,
	year,
	rating,
	landscapeImage,
	description,
	genres,
}) => {
	return (
		<div className='w-full'>
			<img src={landscapeImage} alt='' className='w-full' />
			<h3 className='font-bold text-xl my-4'>{title}</h3>

			<div className='mb-4'>
				<span className='py-1 px-2 bg-primary mr-4'>{rating || '-'}</span>
				<span className='py-1 px-2 bg-bg-700'>{year}</span>
				<span className='ml-4'>{genres.join(', ')}</span>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default MoviePreview;
