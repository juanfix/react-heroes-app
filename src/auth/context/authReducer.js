import { types } from '../types/types';

/**
 * It takes in a state and an action and returns a new state based on the action.type.
 * @param [state] - The current state of the store.
 * @param action - action provide by types file.
 * @returns The state is being returned.
 */

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        isLogged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        isLogged: false,
      };

    default:
      return state;
  }
};
