import { AuthConfiguration } from 'react-native-app-auth';

//TODO: Move to environment variables
// Fusion OAuth configuration
export const authConfig: AuthConfiguration = {
  issuer: 'http://localhost:9011/',
  clientId: '19b24667-c26f-4609-9a82-727163a05776',
  redirectUrl: 'com.todo.auth://oauth',
  scopes: ['offline_access'],
};
