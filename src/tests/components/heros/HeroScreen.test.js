import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import HeroScreen from '../../../components/heros/HeroScreen';


describe('Tests for <HeroScreen /> component', () => {

  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn()
  };
  

  test('It should render Redirect component if there are no args in URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={history} />
      </MemoryRouter>
    );

    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('It should show a hero if parameter exists and is found', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('.row').exists()).toBe(true);
  });

  test('It should return to root path (/) screen with PUSH', () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn()
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroId" component={ () => <HeroScreen history={history} />} />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    
    expect(history.push).toHaveBeenCalledWith('/');
    expect(history.goBack).not.toHaveBeenCalled();
  });

  test('It should call goBack function to return at previous screen', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroId" component={ () => <HeroScreen history={history} />} />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    
    expect(history.goBack).toHaveBeenCalled();
    expect(history.push).not.toHaveBeenCalled();
  });

  test('It should call Redirect if hero does not exist', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spiderrrrr']}>
        <Route path="/hero/:heroId" component={ () => <HeroScreen history={history} />} />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe('');
  });

});