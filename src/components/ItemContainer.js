import {connect} from 'react-redux';
import {buy_cake, add_cake} from '../redux/cake/cakeActions';
import {buyIceCream, addIceCream} from '../redux/iceCream/iceCreamActions';

// In this component mapStateToProps provides given state
// Conditionally by the ownProps (props passed in the component)
// itemType props is passed in this componentr from App.js file
const ItemContainer = (props) => {
    return (
        <div>
            <h3>Number of {props.itemType} is {props.itemNumber} </h3>
            <button onClick={() => props.buyItem()}>Buy {props.itemType}</button>
            <button onClick={() => props.addItem()}>Add {props.itemType}</button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    // Conditionally render which state to show
    // cake state or ice cream state
    const itemState = ownProps.itemType === "cake" ? 
    state.cake.numOfCakes : 
    ownProps.itemType === "icecream" ?
    state.iceCream.numOfIceCreams : null;

    return {
        itemNumber: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    //Conditionally render which item to buy
    const buyItem = ownProps.itemType === "cake" ? 
    () => dispatch(buy_cake()) : 
    ownProps.itemType === "icecream" ?
    () => dispatch(buyIceCream()) : null;

    // Conditionally render which item to add
    const addItem = ownProps.itemType === "cake" ? 
    () => dispatch(add_cake()) : 
    ownProps.itemType === "icecream" ?
    () => dispatch(addIceCream()) : null;

    // Return the buyItem and addItem function
    // This two functions can now be accessed with props.buyItem and props.addItem
    return {
        buyItem,
        addItem
    }
}
 
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ItemContainer);