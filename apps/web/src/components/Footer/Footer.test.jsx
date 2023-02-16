import { screen } from '@testing-library/react';
import { render } from '@/utils/tests';

import { Footer } from '@/components';

describe('components/Footer', () => {
  it('Should render correctly', () => {
    render(<Footer />);

    expect(screen.getByTestId('footer-disclaimer')).toBeInTheDocument();
    expect(screen.getByTestId('footer-copy')).toBeInTheDocument();
    expect(screen.getByTestId('footer-logo')).toBeInTheDocument();
  });
});
