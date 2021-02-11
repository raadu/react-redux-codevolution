import {useSelector, useDispatch} from 'react-redux';
import {buy_cake, add_cake} from '../redux/cake/cakeActions';

const HooksContainer = () => {
    // Gets the state using useSelector hook
    const numOfCakes = useSelector(state => state.cake.numOfCakes);

    //Assign useDispatch hook to a variable
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Cake Container With Hooks</h1>
            <h3>Number of cakes - {numOfCakes}</h3>
            <button onClick={() => dispatch(buy_cake())}>
                Buy Cake
            </button>
            <button onClick={() => dispatch(add_cake())}>
                Add Cake
            </button>
        </div>
    );
}
 
export default HooksContainer;