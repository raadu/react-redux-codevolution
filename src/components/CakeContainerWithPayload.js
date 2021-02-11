import {useState} from 'react';
import {buy_cake, add_cake} from '../redux/cake/cakeActions';
import {connect} from 'react-redux';

// This is just the CakeContainer component
// Except It increment or decrement the cake number with the number given in input 
const CakeContainerWithPayload = (props) => {
    // States
    const [cakeNumber, setCakeNumber] = useState(1);
    console.log(typeof cakeNumber);

    return (
        <div>
            <h1>Cake Container Without Hooks</h1>
            <h3>Number of cakes - {props.numOfCakes}</h3>
            <input 
                type="number"
                value={cakeNumber} 
                onChange={(e) => setCakeNumber(e.target.value)}>
            </input>
            <button onClick={() => props.buyCake(cakeNumber)}> Buy {cakeNumber} Cake(s) </button>
            <button onClick={() => props.addCake(cakeNumber)}> Add {cakeNumber} New Cake(s) </button>
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
        numOfCakes: state.cake.numOfCakes
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
        buyCake: (cakeNumber) => dispatch(buy_cake(cakeNumber)),
        addCake: (cakeNumber) => dispatch(add_cake(cakeNumber))
    }
}

// connect() method comes from react-redux library
// it connects mapStateToProps and mapDispatchToProps to the Component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainerWithPayload);