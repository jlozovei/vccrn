import { isValidCPF, isValidCNPJ, isValidDocument } from '../';

describe('helpers/documents', () => {
  it('Should validate CPF', () => {
    expect(isValidCPF('11111111111')).toBe(false);
    expect(isValidCPF('111.111.111-11')).toBe(false);

    // from https://theonegenerator.com/generators/documents/cpf-generator/
    expect(isValidCPF('30097569682')).toBe(true);
    expect(isValidCPF('007.972.245-80')).toBe(true);

    expect(isValidCPF('aaa')).toBe(false);
    expect(isValidCPF('aaa.aaa.aaa-aa')).toBe(false);
  });

  it('Should validate CNPJ', () => {
    expect(isValidCNPJ('00000000000000')).toBe(false);
    expect(isValidCNPJ('00.000.000/0000-00')).toBe(false);

    // from https://theonegenerator.com/generators/documents/cpf-generator/
    expect(isValidCNPJ('03756703000132')).toBe(true);
    expect(isValidCNPJ('41.771.346/0001-70')).toBe(true);

    expect(isValidCNPJ('aaa')).toBe(false);
    expect(isValidCNPJ('aa.aaa.aaa/aaaa-aa')).toBe(false);
  });

  it('Should validate document', () => {
    expect(isValidDocument('30097569682')).toBe(true);
    expect(isValidDocument('03756703000132')).toBe(true);

    expect(isValidDocument('11111111111111')).toBe(false);
    expect(isValidDocument('11111111111')).toBe(false);
  });
});
