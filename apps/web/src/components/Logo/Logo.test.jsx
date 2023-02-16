import { screen } from '@testing-library/react';
import { render } from '@/utils/tests';

import { Logo } from '@/components';

describe('components/Logo', () => {
  it('Should render correctly', () => {
    render(<Logo data-testid="logo-test" />);

    expect(screen.getByTestId('logo-test')).toBeInTheDocument();
  });
});
