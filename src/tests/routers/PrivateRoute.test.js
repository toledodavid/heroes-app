import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from '../../routers/PrivateRoute';

describe('Tests in <PrivateRoute /> component', () => {

  const props = {
    location: {
      pathname: '/marvel'
    }
  }

  Storage.prototype.setItem = jest.fn();

  test('It should show component if user is authenticated and save localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute 
          isAuthenticated={true}
          component={() => <span>Ready!</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
  });

});