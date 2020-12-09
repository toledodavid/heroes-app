import '@testing-library/jest-dom';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';


describe('Tests in authReducer', () => {
  
  test('It should return a default test', () => {
    const state = authReducer({logged: false}, {});
    expect(state).toEqual({logged: false});
  });

  test('It should authenticate and save name in the state and changes logged to true', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Toledo'
      }
    };

    const state =  authReducer({logged: false}, action);
    expect(state).toEqual({logged: true, name: 'Toledo'});
  });

  test('It should delete name from state and change logged property to false', () => {
    const action = {
      type: types.logout
    }

    const state = authReducer({logged: true, name: 'Toledo'}, action);
    expect(state).toEqual({logged: false});
  });

});