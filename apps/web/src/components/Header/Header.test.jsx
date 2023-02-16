import { screen } from '@testing-library/react';
import { render, userEvent } from '@/utils/tests';

import { Header } from '@/components';

describe('components/Header', () => {
  it('Should render correctly', () => {
    render(<Header />);

    expect(screen.getByTestId('header-menu')).toBeInTheDocument();
    expect(screen.getByTestId('header-logo')).toBeInTheDocument();
  });

  it('Should open and close the menu', async () => {
    render(<Header />);

    const headerHamburger = screen.getByTestId('header-hamburger');
    const headerMenu = screen.getByTestId('header-menu');

    expect(headerHamburger).toBeInTheDocument();
    expect(headerHamburger).toBeVisible();
    expect(headerMenu).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(headerHamburger);

    expect(headerMenu).toHaveAttribute('aria-expanded', 'true');
  });
});
