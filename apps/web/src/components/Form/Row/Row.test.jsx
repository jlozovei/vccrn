import { screen } from '@testing-library/react';
import { render, userEvent } from '@/utils/tests';

import { FormRow } from '@/components';

describe('components/FormRow', () => {
  it('Should render correctly', () => {
    render(
      <FormRow data-testid="row-row">
        <h1>I'm a row</h1>
      </FormRow>
    );

    const row = screen.getByTestId('row-row');

    expect(row).toBeInTheDocument();
    expect(screen.getByText("I'm a row")).toBeInTheDocument();
  });
});
