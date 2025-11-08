import React from 'react';

export default function Navbar({ items = [] }) {
	return (
		<nav>
			<ul>
				{items.map((it, i) => (
					<li key={i}>
						{it.href ? <a href={it.href}>{it.label}</a> : it.label}
					</li>
				))}
			</ul>
		</nav>
	);
}