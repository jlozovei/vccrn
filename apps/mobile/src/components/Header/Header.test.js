import { render, screen } from '@testing-library/react-native';
import { Header } from '@/components';

describe('components/Header', () => {
  it('Should render correctly', () => {
    render(<Header />);

    expect(screen.getByTestId('logo'));
  });
});
