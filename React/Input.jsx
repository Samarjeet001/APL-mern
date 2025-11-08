import React from 'react';

export default function Input({ value, onChange, placeholder = '', type = 'text', name }) {
	return (
		<input
			name={name}
			type={type}
			value={value}
			placeholder={placeholder}
			onChange={(e) => onChange && onChange(e.target.value, e)}
		/>
	);
}