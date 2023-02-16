import { screen } from '@testing-library/react';
import { render, userEvent } from '@/utils/tests';

import { FormSubmit } from '@/components';

describe('components/FormSubmit', () => {
  it('Should render correctly', () => {
    render(<FormSubmit data-testid="form-submit" text="Enviar" />);

    const button = screen.getByTestId('form-submit');

    expect(button).toBeInTheDocument();
    expect(button).not.toHaveAttribute('disabled');
    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });

  it('Should render with loading prop', () => {
    render(<FormSubmit data-testid="form-submit" text="Enviar" isLoading={true} />);

    const button = screen.getByTestId('form-submit');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled');
  });
});
