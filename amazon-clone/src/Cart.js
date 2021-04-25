import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart({ cartItems }) {

    const getCount = () => {
        let count = 0;
        //looping through the items
        cartItems.forEach(item => {
            //add the quantity to the total
            count += item.product.quantity;
            
        });

        return count;
    }
    

    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += (item.product.price * item.product.quantity)
            
        });
        return total;
    }

    return (
        <Container>
            <CartItems cartItems={cartItems} />
            <CartTotal getTotalPrice={getTotalPrice} getCount={getCount} />
        </Container>
    )
}

export default Cart

const Container = styled.div `
    display: flex;
    padding: 14px 18px 0px 18px;
    align-items: flex-start;
`

