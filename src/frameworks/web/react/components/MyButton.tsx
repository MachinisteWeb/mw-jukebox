import { useState } from 'react';
import './MyButton.styl';

export default function MyButton() {
	const [message, setMessage]: [string, (value: string) => void] = useState('Click me');

	const click: () => void = () => {
		setMessage('Clicked');
	};

	return (
		<>
			<button className="my-button" onClick={click}>
				{message} !
			</button>
			<input
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
		</>
	);
}
