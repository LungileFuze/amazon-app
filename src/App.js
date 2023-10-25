import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/layout/ProductDetails";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
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


function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/login">
            <Login/>
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
        </Switch>
      </main>
    </div>
  );
}

export default App;