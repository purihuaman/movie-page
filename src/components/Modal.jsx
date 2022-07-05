import { createPortal } from 'react-dom';

const Modal = ({ children, closeModal }) =>
	createPortal(
		<div className='flex justify-center items-center fixed inset-0 bg-overlay'>
			<div className='relative max-w-3xl bg-bg p-4'>
				<button
					onClick={closeModal}
					className='absolute -top-2 -right-2 p-2 bg-primary rounded'
				>
					X
				</button>

				{children}
			</div>
		</div>,
		document.getElementById('modal-container')
	);

export default Modal;
