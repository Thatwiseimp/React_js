import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

function Header({ cartItems, user, signOut }) {

    const getCount = () => {
        let count = 0;
        //looping through the items
        cartItems.forEach(item => {
            //add the quantity to the total
            count += item.product.quantity;
            
        });

        return count;
    }
    return (
        <Container>
            <HeaderLogo>
                <Link to='/'>
                    <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"} />
                </Link>
            </HeaderLogo>
            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne>Deliver to {user.name}</OptionLineOne>
                    <OptionLineTwo>Chennai</OptionLineTwo>
                </HeaderOption>
                
            </HeaderOptionAddress>
            <HeaderSearch>
                <HeaderSearchInput type='text' />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOption onClick={signOut}>
                <OptionLineOne>Hello {user.name}</OptionLineOne>
                    <OptionLineTwo>Accounts & Lists</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>
                <HeaderOptionCart>
                    <Link to='/cart'>
                        <ShoppingBasketIcon />
                        <CartCount>{getCount()}</CartCount>
                    </Link>           
                </HeaderOptionCart>
            </HeaderNavItems>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
    @media screen and (max-width: 700px){
        font-size: 12px;
    }
`

const HeaderLogo = styled.div`
    img{
        width:100px;
        margin-left: 11px;
        :hover{
            outline: 2px solid white; 
            outline-offset: 8px;

        }
    }

`
const HeaderOptionAddress = styled.div`
    padding-left:9px;
    display: flex;
    align-items: center;

`
const OptionLineOne = styled.div`

`
const OptionLineTwo = styled.div`
    font-weight: 700
`
const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 35px;
    border-radius: 6px;
    overflow: hidden;
    margin-left:1px;
    background-color: white;

    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }
`

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus{
        outline:none;
    }
`
const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center

` 
const HeaderNavItems = styled.div`
    display: flex;
` 
const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px;
    cursor: pointer;
    :hover{
        outline: 2px solid white; 
        outline-offset: -5px;
    }

` 
const HeaderOptionCart = styled.div`
    display: flex;
    margin: 5px 8px 5px 8px;
    a{
        display: flex;
        align-items:center;
        padding-right: 9px;
        color: white;
        text-decoration: none;
    }
    :hover{
        outline: 2px solid white; 

    }
` 
const CartCount = styled.div `
    padding-left: 4px;
    font-weight: 700;
    color: #f08804;
    margin-left: -5px;
    margin-right: -2px;
`