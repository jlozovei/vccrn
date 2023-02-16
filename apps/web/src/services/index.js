import axios from 'axios';

const BaseAPI = axios.create({
  baseUrl: '',
  headers: { 'Content-Type': 'application/json' }
});

export { BaseAPI };

export { login } from './auth';
