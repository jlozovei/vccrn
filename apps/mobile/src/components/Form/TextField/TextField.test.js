import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { TextField } from '@/components';

describe('components/TextField', () => {
  it('Should render correctly', () => {
    render(<TextField label="Username" placeholder="Username" required={false} />);

    expect(screen.getByText('Username'));
  });

  it('Should display errors', () => {
    render(
      <TextField
        label="Username"
        placeholder="Username"
        required={true}
        error={{ message: 'Required field' }}
      />
    );

    expect(screen.getByText('Username*'));
    expect(screen.getByText('Required field'));
  });

  it('Should render toggle password button', () => {
    render(
      <TextField
        label="Password"
        placeholder="Password"
        required={true}
        autoComplete="off"
        textContentType="password"
        password={true}
      />
    );

    expect(screen.getByText('Password*'));
    expect(screen.getByTestId('Password--input')).toBeTruthy();
    expect(screen.getByTestId('Password--touchable'));
  });
});
