import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { db } from './firebase'
import NumberFormat from 'react-number-format'
import { Link , Route} from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Details from './Details';



function Product({ title, price, rating, image, id }) {

    const addToCart = () => {
        const cartItem = db.collection("cartitems").doc(id);
        cartItem.get()
        .then((doc)=>{
            console.log(doc);
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                db.collection("cartitems").doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
    }

    const [details,setdetails]= useState([])
    const getDetails=()=>{
        db.collection('products').doc(id).get()
        .then((doc)=>(setdetails({
            name: doc.data().name,


        })))
    }
    console.log(details)
        
    //     // .then((doc)=>(console.log({
    //     //     name: doc.data().name,  })))
    //     // console.log(details)
    // }


 
    return (
        <Container>
            <Title onClick={getDetails}>
                <Link to='/details'  >
                    {title} 
                </Link>
            </Title>
            <Price><NumberFormat value={price} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh"  prefix={'₹'} /></Price>
            <Rating>
                <StarRatings
                    rating={rating}
                    starRatedColor= '#FFA700'
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="0px"
                />
                
            </Rating>
            <Image src={image}></Image>
            <ActionSection>
                <AddToCartButton
                    onClick={addToCart}
                >
                    <Link to='/cart'>
                        Add to  cart
                    </Link>   
                </AddToCartButton>
            </ActionSection>  
            <Route path='/details'>
                <Details details={details,id} />
            </Route>          
        </Container>
    )
}

export default Product

const Container = styled.div `
    background: white;
    z-index:100;
    flex:1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    :hover{
        box-shadow: -3px 18px 20px 0px rgba(99,89,99,1);
        transform: translate3d(0px, -5px, 0px);
    }
`

const Title = styled.span `
    color:#007185;
    font-weight: 500;
    a{
        text-decoration: none;
        color:#007185;
        :hover{
            color: #FF6A32;
            cursor: pointer;
        }
    }
`    


const Price = styled.span `
    font-weight: 500;
    margin-top: 3px;
    font-size: 25px;
    color: #ce4a28;
`

const Rating = styled.div `
    display: flex;
`

const Image = styled.img `
    max-height: 200px;
    object-fit: contain;
    margin-top: 10px;
`

const AddToCartButton = styled.button `
    width: 100px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 3px;
    cursor: pointer;
    a{
        text-decoration: none;
        color: black
    }
    :hover{
        box-shadow: -3px 2px 3px 0px rgba(99,89,99,1);
        transform: translate3d(0px, -2px, 0px);
        background-color: #dc7d00; 
    }
`
const ActionSection = styled.div `
    place-items: center;
    display: grid;
    padding: 20px 0px 0px 0px;
` 
