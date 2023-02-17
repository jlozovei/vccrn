import { render, screen } from '@testing-library/react-native';
import { Footer } from '@/components';

describe('components/Footer', () => {
  it('Should render correctly', () => {
    render(<Footer />);

    expect(screen.getByText('Responsável Técnico'));
  });
});
