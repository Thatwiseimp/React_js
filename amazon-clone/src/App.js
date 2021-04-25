import { useState, useEffect } from 'react'
import './App.css';
import Header from './Header'
import Cart from './Cart'
import Home from './Home'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { db, auth } from './firebase';
import Login from './Login'
import styled from 'styled-components'
import Details from './Details';


function App() {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartitems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))

      setCartItems(tempItems);
    })
  }
  useEffect(() => {
    getCartItems();
  }, [])

  const signOut = () => {
    auth.signOut().then(()=>{
      localStorage.removeItem('user')
      setUser(null)
    })
  }  


  return (
    <Router>
      {/* CHECK FOR USER LOGIN
      {
        !USER ? () : ()
        if user ? exists(do this) : if not(do that!)

      } */}
      {
        !user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header 
              signOut = {signOut}
              user={user} 
              cartItems={cartItems} />
            
            <Switch>

              <Route path="/cart">
                <Cart cartItems={cartItems} />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/details">
                <Details />
              </Route>


            </Switch>
          </Container>
        )
      }
    </Router>
  );
}


export default App;

const Container = styled.div ``
