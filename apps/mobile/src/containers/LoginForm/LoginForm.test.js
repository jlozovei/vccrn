import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { LoginForm } from '@/containers';

import { strings } from '@vccrn/strings';

describe('containers/LoginForm', () => {
  it('Should render correctly', () => {
    render(<LoginForm />);

    expect(screen.getByText('Faça seu login'));
    expect(screen.getByText('Paciente'));
    expect(screen.getByText('Psicólogo'));
    expect(screen.getByText('Entrar'));
  });

  it('Should change profile', async () => {
    render(<LoginForm />);

    const psychologistProfile = screen.getByTestId('Psicólogo--pressable');

    expect(screen.getByText(`${strings.labels.email}*`));
    expect(psychologistProfile);

    await fireEvent(psychologistProfile, 'press');

    await waitFor(() => {
      expect(screen.queryByText(`${strings.labels.email}*`)).toBeNull();
      expect(screen.getByText(`${strings.labels.document}*`));
    });
  });
});
