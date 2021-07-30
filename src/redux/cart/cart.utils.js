export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(i => i.id === cartItemToAdd.id);
    
    if(existingCartItem) {
        return cartItems.map(i => 
            i.id === cartItemToAdd.id ? {...i, quantity: ++i.quantity} : i)
    }
    
    return [...cartItems, {...cartItemToAdd, quantity: 1 }]
}