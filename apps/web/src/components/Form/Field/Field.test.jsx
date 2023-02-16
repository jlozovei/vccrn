import { screen } from '@testing-library/react';
import { render, userEvent } from '@/utils/tests';

import { FormField } from '@/components';

describe('components/FormField', () => {
  it('Should render correctly', async () => {
    render(
      <FormField
        label="Email"
        name="email"
        placeholder="Insira seu email"
        type="text"
        required={false}
      />
    );

    const input = screen.getByLabelText('Email');
    const email = 'test@email.com';

    expect(input).toBeInTheDocument();

    await userEvent.type(input, email);
    expect(input).toHaveValue(email);
  });

  it('Should update label text and display error', () => {
    render(
      <FormField
        label="Email"
        name="email"
        placeholder="Insira seu email"
        type="text"
        required={true}
        error="Campo obrigatório"
      />
    );

    const input = screen.getByLabelText('Email*');
    expect(input).toBeInTheDocument();

    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
  });
});
