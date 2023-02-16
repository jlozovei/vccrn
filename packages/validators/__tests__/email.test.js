import { isValidEmail } from '../';

describe('helpers/email', () => {
  it('Should validate email', () => {
    expect(isValidEmail('test@test.com')).toBe(true);
    expect(isValidEmail('test@test.co')).toBe(true);

    expect(isValidEmail('test@test')).toBe(false);
    expect(isValidEmail('test@')).toBe(false);
  });
});
