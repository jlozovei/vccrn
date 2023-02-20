import { createServer } from 'miragejs';

const user = {
  id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
  firstName: 'John',
  lastName: 'Doe',
  type: 'pacient'
};

const psychologist = {
  id: '9146d560-ae09-11ed-afa1-0242ac120002',
  firstName: 'Alex',
  lastName: 'Doe',
  type: 'psychologist'
};

const server = () =>
  (window.server = createServer({
    routes() {
      this.post('/auth/login', (schema, request) => {
        const body = JSON.parse(request.requestBody);

        const { email, document, password } = body;
        const profile = document ? psychologist : user;

        return profile;
      });
    }
  }));

export { server };
