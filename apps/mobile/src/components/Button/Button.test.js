import { render, screen } from '@testing-library/react-native';
import { Button } from '@/components';

describe('components/Button', () => {
  it('Should render correctly', () => {
    render(<Button text="Beep" />);

    expect(screen.getByText('Beep'));
  });
});
