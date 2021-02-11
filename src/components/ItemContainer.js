import {connect} from 'react-redux';

// In this component mapStateToProps provides given state
// Conditionally by the ownProps (props passed in the component)
// itemType props is passed in this componentr from App.js file
const ItemContainer = (props) => {
    console.log("itemcontainer props: ", props);
    return (
        <div>
            <h3>Number of {props.itemType} is {props.itemNumber} </h3>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    const itemState = ownProps.itemType === "cake" ? 
    state.cake.numOfCakes : 
    ownProps.itemType === "icecream" ?
    state.iceCream.numOfIceCreams : null;

    return {
        itemNumber: itemState
    }
}
 
export default connect(mapStateToProps)(ItemContainer);