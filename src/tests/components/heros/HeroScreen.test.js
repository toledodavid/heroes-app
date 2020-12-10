import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import HeroScreen from '../../../components/heros/HeroScreen';


describe('Tests for <HeroScreen /> component', () => {

  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn()
  };

  const wrapper = mount(
    <MemoryRouter initialEntries={['/hero']}>
      <HeroScreen history={history} />
    </MemoryRouter>
  );
  

  test('It should render Redirect component if there are no args in URL', () => {
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

});