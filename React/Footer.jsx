import React from 'react';

export default function Footer({ text = '© Your Company' }) {
	return (
		<footer>
			<small>{text}</small>
		</footer>
	);
}