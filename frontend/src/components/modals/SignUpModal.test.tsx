import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, prettyDOM, render, waitFor } from '@testing-library/react';
import SignUpModal from './SignUpModal';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';

describe('Sign up modal', () => {
  const modalComponent = (
    <MemoryRouter initialEntries={['?signup=true']}>
      <SignUpModal />
    </MemoryRouter>
  );


  afterEach(async () => {
    cleanup()
  })


  it('should render the Sign up modal', () => {
    const screen = render(modalComponent);
    const modal = screen.getByText('Sign up');
    expect(modal).toBeDefined();
  });

  it('should disable button if form is not fulfilled', () => {
    const screen = render(modalComponent);
    const submitButton = screen.getByRole('button', {
      name: /Create an account/i
    });
    expect(submitButton).toBeDisabled();
  });

  it('should update email input on user action', async () => {
    const user = userEvent.setup()
    const email = faker.internet.email();

    const screen = render(modalComponent);
    const emailInput = screen.getByTestId('input-email');

    await user.type(emailInput, email);

    expect(emailInput).toHaveValue(email)
  });

  it('should update password input on user action', async () => {
    const user = userEvent.setup()
    const password = faker.internet.password();

    const screen = render(modalComponent);
    const passwordInput = screen.getByTestId('input-password');

    await user.type(passwordInput, password);

    expect(passwordInput).toHaveValue(password)
  });

  it('should update terms & policy based on user action', async () => {
    const user = userEvent.setup()
    const screen = render(modalComponent);

    const checkboxInput = screen.getByTestId('input-termsAndPrivacyAccepted');

    await user.click(checkboxInput);

    expect(checkboxInput).toBeChecked();
  });

  it('should submit the form and close the modal', async () => {
    const user = userEvent.setup();
    const screen = render(modalComponent);

    const email = faker.internet.email();
    const password = faker.internet.password();

    await user.type(screen.getByTestId('input-email'), email);
    await user.type(screen.getByTestId('input-password'), password);
    await user.click(screen.getByTestId('input-termsAndPrivacyAccepted'));

    const submitButton = screen.getByRole('button', {
      name: /Create an account/i
    });

    expect(submitButton).toBeEnabled();
    await user.click(submitButton);

    await waitFor(() => expect(screen.queryByText('Sign up')).not.toBeInTheDocument(), { timeout: 5000 });
  });
});

