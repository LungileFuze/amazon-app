import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/layout/ProductDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import Returns from "./components/Returns";
import Cart from "./components/Cart";
import Location from "./components/Location";
import Deals from "./components/main-nav/Deals";
import CustomerService from "./components/main-nav/CustomerService";
import Registry from "./components/main-nav/Registry";
import GiftCards from "./components/main-nav/GiftCards";
import Sell from "./components/main-nav/Sell";
import Sidebar from "./components/main-nav/Sidebar";
import NotFound from "./components/NotFound";
import ShoppingContext from "./context/shopping/shoppingContext";
import { useContext, useEffect } from "react";
import { auth } from "./firebase";




function App() {
  const shoppingContext = useContext(ShoppingContext)
  const {setUser } = shoppingContext

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is -> ", authUser)

      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    })
  },[])

  return (
    <>
       <Header />
      <main>
        <Switch>
          <Route path="/" exact >
            <Redirect to="/home" />
          </Route>
          <Route path="/Home" >
            <Home />
          </Route>
          <Route path="/Products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/returns">
            <Returns/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/location">
            <Location/>
          </Route>
          <Route path="/deals">
            <Deals/>
          </Route>
          <Route path="/customerService">
            <CustomerService/>
          </Route>
          <Route path="/registry">
            <Registry/>
          </Route>
          <Route path="/giftCards">
            <GiftCards/>
          </Route>
          <Route path="/sell">
            <Sell/>
          </Route>
          <Route path="/sidebar">
            <Sidebar/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
     
   
  );
}

export default App;