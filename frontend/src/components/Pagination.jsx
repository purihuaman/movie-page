import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';

const Pagination = ({ page, totalPages, setPage }) => {
	if (!totalPages) return null;

	const isBackDisabled = page === 1;
	const isNextDisabled = page === totalPages;

	return (
		<div className='flex justify-between items-center'>
			<button
				onClick={() => setPage(page - 1)}
				disabled={isBackDisabled}
				className='bg-primary disabled:bg-gray p-1 rounded-full'
			>
				<ArrowLeft className='h-6' />
			</button>

			<span className='pl-2 pr-2'>
				Página {page} de {totalPages}
			</span>

			<button
				onClick={() => setPage(page + 1)}
				disabled={isNextDisabled}
				className='bg-primary disabled:bg-gray p-1 rounded-full'
			>
				<ArrowRight className='h-6' />
			</button>
		</div>
	);
};

export default Pagination;
