import { isCPF, isCNPJ } from 'validation-br';

const isValidCPF = (cpf) => {
  return isCPF(cpf);
};

const isValidCNPJ = (cnpj) => {
  return isCNPJ(cnpj);
};

const isValidDocument = (documentNumber) => {
  return isCPF(documentNumber) || isCNPJ(documentNumber);
};

export { isValidCPF, isValidCNPJ, isValidDocument };
