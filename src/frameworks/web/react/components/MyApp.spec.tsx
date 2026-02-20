import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import MyApp from '@webreact/components/MyApp';

describe('MyApp', () => {
	it('affiche le bon message et contient le titre', () => {
		const { container } = render(<MyApp />);

		// Vérifie que le texte de ta variable 'msg' est bien présent
		expect(within(container).getByText('Hello World !')).toBeInTheDocument();

		// Vérifie que la structure HTML (la classe .title) est bonne
		const title = within(container).getByRole('heading', { level: 1 });
		expect(title).toHaveClass('title');
	});

	it('affiche le composant enfant MyButton', () => {
		const { container } = render(<MyApp />);

		// On vérifie que le composant MyButton est bien présent (via le bouton "Click me !")
		expect(within(container).getByRole('button', { name: /click me !/i })).toBeInTheDocument();
	});
});
