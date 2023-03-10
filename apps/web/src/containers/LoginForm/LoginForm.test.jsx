import { screen, waitFor } from '@testing-library/react';
import { render, userEvent } from '@/utils/tests';
import { beforeEach } from 'vitest';

import { strings } from '@vccrn/strings';

import { LoginForm } from '@/containers';

beforeEach(() => {
  render(<LoginForm />);
});

describe('containers/LoginForm', () => {
  it('Should render correctly', () => {
    expect(screen.getByText('Faça seu login')).toBeInTheDocument();
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
    expect(screen.getByTestId('login-profile')).toBeInTheDocument();
  });

  it('Should reset the form when changing profiles', async () => {
    const userProfile = screen.getByText('Paciente');
    const psychologistProfile = screen.getByText('Psicólogo');
    const passwordInput = screen.getByLabelText('Senha*');
    const password = 'supersecret';

    expect(userProfile).toBeInTheDocument();
    expect(psychologistProfile).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    await userEvent.type(passwordInput, password);
    expect(passwordInput).toHaveValue(password);

    await userEvent.click(psychologistProfile);
    expect(passwordInput).toHaveValue('');
  });

  it('Should login, display user info and logout', async () => {
    const credentials = {
      email: 'test@email.com',
      password: 'supersecret'
    };

    const emailInput = screen.getByLabelText(`${strings.labels.email}*`);
    const passwordInput = screen.getByLabelText(`${strings.labels.password}*`);
    const submitButton = screen.getByText(strings.labels.login);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    await userEvent.type(emailInput, credentials.email);
    await userEvent.type(passwordInput, credentials.password);

    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId('user-info')).toBeInTheDocument();
      expect(screen.getByText(strings.labels.logout)).toBeInTheDocument();
    });

    await userEvent.click(screen.getByText(strings.labels.logout));

    await waitFor(() => expect(screen.queryByTestId('user-info')).not.toBeInTheDocument());
  });
});
