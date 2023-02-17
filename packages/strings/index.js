const errors = {
  required: 'Campo obrigatório.',
  password: 'Senha muito curta.',
  document: 'Documento inválido.',
  email: 'Email inválido.'
};

const labels = {
  email: 'Email',
  document: 'CFP/CNPJ',
  password: 'Senha',
  login: 'Entrar',
  logout: 'Sair'
};

const placeholders = {
  email: 'Digite seu email',
  password: 'Digite sua senha',
  document: 'Digite seu documento'
};

// const regex = {
//   document:
//     /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/g
// };

const strings = {
  errors,
  labels,
  placeholders
  // regex
};

export { strings };
