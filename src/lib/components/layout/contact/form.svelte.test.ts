import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { defaults } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import Form, { contactFormSchema } from './form.svelte';

const renderForm = () => render(Form, { props: { data: defaults(zod4(contactFormSchema)) } });

describe('contact form', () => {
	it('renders the three labelled fields and a submit button', () => {
		renderForm();

		expect(screen.getByLabelText('Votre nom')).toBeInTheDocument();
		expect(screen.getByLabelText('Votre email')).toBeInTheDocument();
		expect(screen.getByLabelText('Votre message')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Envoyer' })).toBeInTheDocument();
	});

	it('posts to the sendMessage form action', () => {
		renderForm();

		const form = screen.getByRole('button', { name: 'Envoyer' }).closest('form');
		expect(form).toHaveAttribute('method', 'POST');
		expect(form).toHaveAttribute('action', '?/sendMessage');
	});

	it('flags a too-short name after the field is edited and left', async () => {
		const user = userEvent.setup();
		renderForm();

		await user.type(screen.getByLabelText('Votre nom'), 'Vi');
		await user.tab();

		expect(await screen.findByText(/at least 3 characters/i)).toBeInTheDocument();
	});

	it('flags an invalid email after the field is edited and left', async () => {
		const user = userEvent.setup();
		renderForm();

		const email = screen.getByLabelText('Votre email');
		await user.type(email, 'not-an-email');
		await user.tab();

		await waitFor(() => expect(email).toHaveAttribute('aria-invalid', 'true'));
	});

	it('accepts a valid email without complaint', async () => {
		const user = userEvent.setup();
		renderForm();

		const email = screen.getByLabelText('Votre email');
		await user.type(email, 'vincent@example.com');
		await user.tab();

		expect(email).not.toHaveAttribute('aria-invalid', 'true');
	});

	it('wires the name and email fields to their autocomplete tokens', () => {
		renderForm();

		expect(screen.getByLabelText('Votre nom')).toHaveAttribute('autocomplete', 'name');
		expect(screen.getByLabelText('Votre email')).toHaveAttribute('autocomplete', 'email');
	});
});
