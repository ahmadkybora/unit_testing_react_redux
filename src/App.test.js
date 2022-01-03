import { mount, shallow} from 'enzyme';
import { Provider } from 'react-redux';
import App from './App';
import { storeFactory } from './store/util';

test('renders learn react link', () => {
  const store = storeFactory();
  mount(<Provider store={store}><App /></Provider>);
});
