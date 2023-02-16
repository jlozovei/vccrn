import { screen } from '@testing-library/react';
import { render, userEvent } from '@/utils/tests';

import { LoginForm } from '@/containers';

describe('containers/LoginForm', () => {
  it('Should render correctly', () => {
    render(<LoginForm />);

    expect(screen.getByText('Faça seu login')).toBeInTheDocument();
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
    expect(screen.getByTestId('login-profile')).toBeInTheDocument();
  });

  it('Should reset the form when changing profiles', async () => {
    render(<LoginForm />);

    const userProfile = screen.getByText('Paciente');
    const psychologistProfile = screen.getByText('Psicólogo');
    const passwordField = screen.getByLabelText('Senha*');
    const password = 'supersecret';

    expect(userProfile).toBeInTheDocument();
    expect(psychologistProfile).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    await userEvent.type(passwordField, password);
    expect(passwordField).toHaveValue(password);

    await userEvent.click(psychologistProfile);
    expect(passwordField).toHaveValue('');
  });
});
