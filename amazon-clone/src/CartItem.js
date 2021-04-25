import React from 'react'
import styled from 'styled-components'
import './CartItems.css';
import { db } from './firebase';
import NumberFormat from 'react-number-format'

function CartItem({ id, item }) {

    const deleteItem = (e) =>{
        e.preventDefault()
        db.collection('cartitems').doc(id).delete();
    }

    let options = []

    for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
        options.push(<option value={i}> Qty: {i}</option>)
    }

    const changeQuantity = (newQuantity) => {
        console.log(newQuantity)
        db.collection('cartitems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }


    return (
        <Container>
            <ImageContainer>
                <img src={item.image} />
            </ImageContainer>
            <InfoContainer>
                <Top>
                    <h2>{item.name}</h2>
                </Top>
                <Bottom>
                    <Quantity>
                        <select
                            value={item.quantity} 
                            onChange={(e) => changeQuantity(e.target.value)}                       
                        >
                            {options}
                        </select>
                    </Quantity>
                    <Delete onClick={deleteItem} >Delete</Delete>
                </Bottom>
            </InfoContainer>
            <Price><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={' ₹ '} /></Price>
        </Container>
    )
}

export default CartItem

const Container = styled.div `
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid #DDD;
`
const ImageContainer = styled.div `
    width: 180px;
    height: 180px;
    margin-right: 16px;
    flex-shrink: 0;
    flex-grow: 0;
    img{
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`
const InfoContainer = styled.div `
    flex-grow: 1;
`
const Top = styled.div `
    color:#007185;
    h2{
        font-size:18px;
    }
`
const Bottom = styled.div `
    display: flex;
    margin-top: 4px;
    align-items: center;
`
const Quantity = styled.div `
    select{
        border-radius: 7px;
        background-color: #F0F2F2;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(15,17,17,.15);
        :focus{
            outline: none;
        }
    }
`
const Delete = styled.div `
    color: #007185;
    margin-left: 16px;
    cursor:pointer;
`

const Price = styled.div `
    font-size:18px;
    font-weight: 700;
    margin-left: 16px;
`