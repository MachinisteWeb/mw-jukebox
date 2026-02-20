import { useState } from 'react';
import MyButton from '@webreact/components/MyButton';
import './MyApp.styl';

export default function MyApp() {
	const msg: string = 'Hello World !';
	const [message]: [string, (value: string) => void] = useState(msg);

	return (
		<div className="hello-world">
			<h1 className="title">{message}</h1>
			<MyButton />
		</div>
	);
}
