import React from 'react';

export default function List({ items = [], renderItem }) {
	return (
		<ul>
			{items.map((item, i) => (
				<li key={i}>{renderItem ? renderItem(item) : String(item)}</li>
			))}
		</ul>
	);
}