import PropTypes from 'prop-types'

const CartItem = ({ cartItem }) => {
    const { course_name } = cartItem
    return (
        <li className="text-gray-500 py-1">{course_name}</li>
    );
};

CartItem.propTypes = {
    cartItem: PropTypes.object
}
export default CartItem;