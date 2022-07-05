const MoviePreview = ({
	title,
	image,
	year,
	rating,
	landscapeImage,
	description,
}) => {
	return (
		<div className='w-full'>
			<img src={landscapeImage} alt='' className='w-full' />
			<h3 className='font-semibold'>{title}</h3>
			<p>{description}</p>
			<p>{year}</p>
			<p>{rating}</p>
		</div>
	);
};

export default MoviePreview;
