import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'
import {useState, useEffect} from 'react'



function Details(details,id) {
    console.log(details,id)

    return (
        <Container>
            <h1>Heyy</h1>

        </Container>
    )
}

export default Details
const Container = styled.div`
    width:500px;
    height=400px;
    background-color: white;
`
