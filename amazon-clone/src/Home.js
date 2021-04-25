import React from 'react'
import styled from 'styled-components';
import Product from './Product';
import { db } from './firebase';
import { useState, useEffect } from "react";

function Home() {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts = []

            tempProducts=snapshot.docs.map((doc)=>(
                {
                    id: doc.id,
                    product: doc.data()
                }
            ));
            setProducts(tempProducts);
        })
    }

    useEffect(() => {
        console.log('call products!');
        getProducts();
    },[])

    console.log(products)

    return (
        <Container>
            <Banner>

            </Banner>
            <Content >
                {
                    products.map((data)=>(
                        <Product
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                            id={data.id}

                        />
                    ))
                }
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div `
    margin: 0 auto;
    max-width: 1500px;
    
`

const Banner = styled.div `
    background-image: url('https://imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    z-index: 1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
`

const Content = styled.div `
    margin-top: -350px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-wrap: wrap;
    z-index: 100;

`