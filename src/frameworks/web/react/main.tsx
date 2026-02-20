import { createRoot } from 'react-dom/client';
import MyApp from '@webreact/components/MyApp';

const container = document.getElementById('app');
if (container) {
	createRoot(container).render(<MyApp />);
}
