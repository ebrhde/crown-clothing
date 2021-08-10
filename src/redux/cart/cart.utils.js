export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(i => i.id === cartItemToAdd.id);
    
    if(existingCartItem) {
        return cartItems.map(i => 
            i.id === cartItemToAdd.id ? {...i, quantity: ++i.quantity} : i)
    }
    
    return [...cartItems, {...cartItemToAdd, quantity: 1 }]
}

export const deleteItemFromCart = (cartItems, cartItemToDelete) => {
    const existingCartItem = cartItems.find(i => i.id === cartItemToDelete.id);

    if(existingCartItem.quantity == 1) {
        return cartItems.filter(i => i.id !== cartItemToDelete.id)
    }

    return cartItems.map(i => i.id == cartItemToDelete.id ?
    {...i, quantity: i.quantity - 1} : i);
}