import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import SearchScreen from '../../../components/search/SearchScreen';

describe('Tests for <SearchScreen /> component', () => {

  test('It should render correctly with default values', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
  });

  test('It should show Batman and input field shoul have queryString value', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper).toMatchSnapshot();
  });

  test('It should show an error if hero is not found', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batmancwefw']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('.alert-danger').text().trim()).toBe('There is no hero with batmancwefw');
    expect(wrapper).toMatchSnapshot();
  });

  test('It should call push history', () => {
    const history = {
      push: jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={() => <SearchScreen history={history} />} />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman'
      }
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    });

    expect(history.push).toHaveBeenCalledWith('?q=batman');
  });

});