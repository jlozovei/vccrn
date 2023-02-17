import { render, screen } from '@testing-library/react-native';
import { Submit } from '@/components';

describe('components/Submit', () => {
  it('Should render correctly', () => {
    render(<Submit text="Beep" loading={false} />);

    expect(screen.getByText('Beep'));
  });

  it('Should display loading', () => {
    render(<Submit text="Boop" loading={true} />);

    expect(screen.getByText('Boop'));
    expect(screen.getByTestId('spinner'));
  });
});
