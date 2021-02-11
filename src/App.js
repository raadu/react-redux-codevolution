import './App.css';
import {Provider} from 'react-redux';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CakeContainerWithPayload from './components/CakeContainerWithPayload';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
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
        <CakeContainerWithPayload/>
        <IceCreamContainer/>
        <ItemContainer itemType="cake"/>
        <ItemContainer itemType="icecream"/>
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
