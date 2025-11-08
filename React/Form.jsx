import React from 'react';

export default function Form({ onSubmit, children, className = '' }) {
	return (
		<form
			className={className}
			onSubmit={(e) => {
				e.preventDefault();
				if (onSubmit) onSubmit(e);
			}}
		>
			{children}
		</form>
	);
}