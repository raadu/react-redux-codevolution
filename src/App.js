import './App.css';
import {Provider} from 'react-redux';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';

// Provider is a Higher Order Component that comes from 'react-redux' library
// Provider wraps other child components
// So that redux store can be accessed by all the child components

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <CakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
