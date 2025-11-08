import React from 'react';

export default function Avatar({ src, alt = '', size = 40, name }) {
	const style = { width: size, height: size, borderRadius: '50%', objectFit: 'cover' };
	return src ? (
		<img src={src} alt={alt} style={style} />
	) : (
		<div style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ccc' }}>
			{(name || '').split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()}
		</div>
	);
}