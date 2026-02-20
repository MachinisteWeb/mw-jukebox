import { describe, it, expect } from 'vitest';
import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyButton from './MyButton';

describe('MyButton', () => {
	it('affiche le message initial correct', () => {
		const { container } = render(<MyButton />);

		// Vérifie le texte du bouton : "Click me" + " !"
		expect(within(container).getByRole('button').textContent).toBe('Click me !');

		// Vérifie la valeur initiale de l'input
		const input = within(container).getByRole('textbox');
		expect(input).toHaveValue('Click me');
	});

	it('change le texte au clic sur le bouton', async () => {
		const user = userEvent.setup();
		const { container } = render(<MyButton />);

		const button = within(container).getByRole('button');

		// Simule le clic
		await user.click(button);

		// Vérifie que le texte a changé (message "Clicked" + " !" = "Clicked !")
		expect(button.textContent).toBe('Clicked !');
	});

	it("met à jour le texte quand on écrit dans l'input", async () => {
		const user = userEvent.setup();
		const { container } = render(<MyButton />);

		const input = within(container).getByRole('textbox');

		// Simule une saisie utilisateur
		await user.clear(input);
		await user.type(input, 'Nouveau texte');

		// Vérifie que le bouton a bien réagi (réactivité React)
		expect(within(container).getByRole('button').textContent).toBe('Nouveau texte !');
	});
});
