import { BaseAPI } from '@/services';

const login = ({ email, document, password }) =>
  BaseAPI.post('/auth/login', { email, document, password });

export { login };
