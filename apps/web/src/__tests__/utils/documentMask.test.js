import { documentMask } from '@/utils';

describe('utils/documentMask', () => {
  it('Should mask a CPF', () => {
    const cpf = '00011122233';

    expect(documentMask(cpf)).toBe('000.111.222-33');
  });

  it('Should mask a CNPJ', () => {
    const cpf = '00111222333344';

    expect(documentMask(cpf)).toBe('00.111.222/3333-44');
  });
});
