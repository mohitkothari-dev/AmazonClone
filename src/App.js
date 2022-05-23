import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Footer from './Footer';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import HeaderSecondary from './HeaderSecondary';

function App() {
  const [{user},dispatch] = useStateValue(); 

  useEffect(()=>{
    //will only runs once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("USER:",authUser)
      if(authUser){
        //User is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //USer us logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
          <Header />
          <HeaderSecondary />
          <Checkout />
        </Route>
        
        <Route path="/payment">
          <Header />
          <HeaderSecondary />
          <Payment />
        </Route>

        <Route path="/">
          <Header />
          <HeaderSecondary />
          <Home />
          <Footer />
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
