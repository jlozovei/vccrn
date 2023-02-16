import { screen } from '@testing-library/react';
import { render } from '@/utils/tests';

import App from '@/App';

describe('App', () => {
  it('Should render correctly', () => {
    render(<App />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
