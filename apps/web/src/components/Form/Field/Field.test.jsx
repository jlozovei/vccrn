import { screen } from '@testing-library/react';
import { render, userEvent } from '@/utils/tests';

import { FormField } from '@/components';

describe('components/FormField', () => {
  it('Should render correctly', async () => {
    render(<FormField label="Email" name="email" placeholder="Insira seu email" type="text" />);

    const input = screen.getByLabelText('Email');
    const email = 'test@email.com';

    expect(input).toBeInTheDocument();

    await userEvent.type(input, email);
    expect(input).toHaveValue(email);
  });
});
