import PropTypes from 'prop-types'
import CartItem from "../CartItem/CartItem";

const Cart = ({ cart, totalCredit, remainingHour, totalPrice }) => {
    return (
        <div className="bg-white rounded-xl p-4">
            <h3 className="py-2 text-lg font-semibold text-[#2F80ED]">Credit Hour Remaining {remainingHour} hr</h3>
            <hr />
            <h3 className="text-xl font-bold py-4">Course Name</h3>
            <ol className="pb-4 list-decimal pl-5">
                {
                    cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)
                }
            </ol>
            <hr />
            <h3 className="text-gray-700 font-medium py-5">Total Credit Hour : {totalCredit}</h3>
            <hr />
            <h3 className="text-gray-700 font-semibold py-5">Total Price : {totalPrice} USD</h3>

        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array,
    totalCredit: PropTypes.number,
    remainingHour: PropTypes.number,
    totalPrice: PropTypes.number
}
export default Cart;