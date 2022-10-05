import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('Pruebas en el authReducer', () => {
  const action = (type, payload) => {
    return {
      type: type,
      payload,
    };
  };

  test('Debe retornar el estado por defecto', () => {
    const userTest = {};

    const state = authReducer(userTest, action('[Auth] Nothing', userTest));

    expect(state).toEqual(userTest);
  });

  test('Debe de llamar el login, autenticar y establecer el user', () => {
    const userTest = {
      id: 1,
      name: 'Juanfix',
    };

    const { isLogged } = authReducer(userTest, action(types.login, userTest));

    expect(isLogged).toBeTruthy();
  });

  test('Debe de llamar el login, autenticar y establecer el user', () => {
    const userTest = {
      id: 1,
      name: 'Juanfix',
      isLogged: true,
      user: { id: 1, name: 'Juanfix' },
    };

    const { isLogged } = authReducer(userTest, action(types.logout, userTest));

    expect(isLogged).toBeFalsy();
  });
});
