import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, closeModal }) => {
	useEffect(() => {
		document.body.classList.add('overflow-y-hidden');

		return () => document.body.classList.remove('overflow-y-hidden');
	}, []);

	return createPortal(
		<div className='flex justify-center items-center fixed inset-0 bg-overlay transition-transform'>
			<div className='relative max-w-2xl bg-bg p-6'>
				<button
					onClick={closeModal}
					className='absolute top-0 right-0 p-2 bg-primary rounded'
				>
					X
				</button>

				{children}
			</div>
		</div>,
		document.getElementById('modal-container')
	);
};
export default Modal;
