import { useState } from 'react';

const InputSearch = ({ onChange }) => {
	const [inputValue, setInputValue] = useState();

	return (
		<input
			type='text'
			value={inputValue}
			// onChange={(ev) => setSearchTerm(ev.target.value)}
			className='py-2 px-4 bg-transparent border border-color:gray rounded-md'
			placeholder='Buscar...'
		/>
	);
};

export default InputSearch;
