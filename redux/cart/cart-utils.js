
export const addItemToCart = (cartItems , cartItemsToCart)=>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemsToCart.id
    )
    if(existingCartItem){
        return cartItems.map((cartItem)=> cartItem.id === cartItemsToCart.id
            ? {...cartItem , quantity:  cartItem.quantity + 1 }
            : cartItem)
    }

    return [...cartItems , {...cartItemsToCart,  quantity: 1 }]
}

export const removeCartItem = (cartItems , cartItemsRemove)=>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemsRemove.id
    )
    if (existingCartItem.quantity === 1){
        return cartItems.filter((cartItem)=> cartItem.id !== cartItemsRemove.id)
    }
    return cartItems.map((cartItem )=> cartItem.id === cartItemsRemove.id
        ? {...cartItem , quantity:  cartItem.quantity - 1 }
        : cartItem)
}