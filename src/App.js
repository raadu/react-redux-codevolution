import './App.css';
import {Provider} from 'react-redux';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import store from './redux/store';

// Provider is a Higher Order Component that comes from 'react-redux' library
// Provider wraps other child components
// So that redux store can be accessed by all the child components

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
      </div>
    </Provider>
  );
}

export default App;
