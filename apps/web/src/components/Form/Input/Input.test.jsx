import { screen } from '@testing-library/react';
import { render, userEvent } from '@/utils/tests';

import { FormInput } from '@/components';

describe('components/FormInput', () => {
  it('Should render correctly', async () => {
    render(<FormInput name="name" id="input-name" placeholder="Insira seu nome" />);

    const input = screen.getByPlaceholderText('Insira seu nome');
    const name = 'Vitest';

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');

    await userEvent.type(input, name);
    expect(input).toHaveValue(name);
  });

  it('Should show/hide password', async () => {
    render(
      <FormInput
        name="password"
        type="password"
        id="input-password"
        placeholder="Insira sua senha"
      />
    );

    const input = screen.getByPlaceholderText('Insira sua senha');
    const button = screen.getByTestId('password-button');

    expect(input).toHaveAttribute('type', 'password');

    await userEvent.click(button);
    expect(input).toHaveAttribute('type', 'text');

    await userEvent.click(button);
    expect(input).toHaveAttribute('type', 'password');
  });
});
