import { screen } from '@testing-library/react';
import { render, userEvent } from '@/utils/tests';

import { FormSubmit } from '@/components';

describe('components/FormSubmit', () => {
  it('Should render correctly', () => {
    render(<FormSubmit data-testid="form-submit" text="Enviar" />);

    expect(screen.getByTestId('form-submit')).toBeInTheDocument();
    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });
});
