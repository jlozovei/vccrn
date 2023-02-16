import { screen } from '@testing-library/react';
import { render, userEvent } from '@/utils/tests';

import { FormLabel } from '@/components';

describe('components/FormLabel', () => {
  it('Should render correctly', () => {
    render(<FormLabel text="Field" htmlFor="input" />);

    const label = screen.getByText('Field');

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'input');
  });
});
