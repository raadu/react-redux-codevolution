import {buy_cake, add_cake} from '../redux/cake/cakeActions';
import {connect} from 'react-redux';

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}> Buy Cake </button>
            <button onClick={props.addCake}> Add New Cake </button>
        </div>
    );
}

// mapStateToProps can be named anything
// But it is convention write like this
// mapStateToProps function assigns redux state to a prop
// This prop can be accessed inside this component
// as prop.numOfCakes 
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

// mapDispatchToProps can be named anything
// but it is convention to write like this
// mapDispatchToProps takes dispatch as parameter and 
// maps action creators to props
// this props can be accessed like props.buyCake in this component
// to invoke function props.buyCake()
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buy_cake()),
        addCake: () => dispatch(add_cake())
    }
}

// connect() method comes from react-redux library
// it connects mapStateToProps and mapDispatchToProps to the Component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);