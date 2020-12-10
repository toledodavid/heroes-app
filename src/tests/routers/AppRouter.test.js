import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import AppRouter from '../../routers/AppRouter';


describe('Tests for <AppRouter /> component', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  };

  test('It should show login if user is not authenticated', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('It should show marvel component is user is authenticated', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: 'Pedro'
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find('.navbar').exists()).toBe(true);
  });

});