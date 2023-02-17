import { render, screen } from '@testing-library/react-native';
import { Logo } from '@/components';

describe('components/Logo', () => {
  it('Should render correctly', () => {
    render(<Logo />);

    expect(screen.getByTestId('logo'));
  });
});
