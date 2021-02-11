import {buyIceCream, addIceCream} from '../redux/iceCream/iceCreamActions';
import {connect} from 'react-redux';

const IceCreamContainer = (props) => {
    return (
        <div>
            <h1>Ice Cream Container Without Hooks</h1>
            <h3>Number of icecreams - {props.numOfIceCreams}</h3>
            <button onClick={props.buyIceCream}> Buy Ice Cream </button>
            <button onClick={props.addIceCream}> Add New Ice Cream </button>
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
        numOfIceCreams: state.iceCream.numOfIceCreams
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
        buyIceCream: () => dispatch(buyIceCream()),
        addIceCream: () => dispatch(addIceCream())
    }
}

// connect() method comes from react-redux library
// it connects mapStateToProps and mapDispatchToProps to the Component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer);