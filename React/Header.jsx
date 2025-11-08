import React from 'react';

export default function Header({ title = 'App Title', children }) {
	return (
		<header>
			<h1>{title}</h1>
			{children}
		</header>
	);
}