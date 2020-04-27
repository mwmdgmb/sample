import { createSelector } from 'reselect'
const selectCard = state => state.cart


export const selectCartItems = createSelector(
    [selectCard],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems] ,
    cartItems => cartItems.reduce((x , cartItem)=> x + cartItem.quantity , 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((x , cartItem) => x + cartItem.quantity * cartItem.employee_salary , 0  )
)