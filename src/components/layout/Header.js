import {useContext} from "react"
import React from "react";
import "./Header.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ShoppingContext from "../../context/shopping/shoppingContext";
import { auth } from "../../firebase";

const Header = () => {
  const shoppingContext = useContext(ShoppingContext)
  const {basket, user} = shoppingContext
  console.log(user)
  

  const handleAuthentication = () => {
    if (user) {
      console.log(user)
      auth.signOut()
    }
  }

        return (
          <>
           <header className="header">
        <Link to="/" className="custom-links">
          <div className="header-logo">
            <img
              src="https://sleepshepherd.com/wp-content/uploads/2016/11/amazonlogo-white.png"
              alt="amazon-logo"
            />
          </div>
        </Link>

        <Link to="/location" className="custom-links">
          <div className="header-nav">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </span>

            <div className="header-options">
              <span className="header-optionOne deliver">Deliver to</span>
              <span className="header-optionTwo">South Africa</span>
            </div>
          </div>
        </Link>

        <div className="header-search">
          <Dropdown className="departments">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              All
            </Dropdown.Toggle>

            <Dropdown.Menu className="menu-items">
              <Dropdown.Item href="#/action-1">All Departments</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Arts and Crafts</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Automotives</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Baby</Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Beauty & Personal Care
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Books</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Boy's Fashion</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Computers</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Deals</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Digital Music</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Electronics</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Girl's Fashion</Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                Health & Household
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Home & Kitchen</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Industrial and Scientifics
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">Kindle Store</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Luggage</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Men's Fashion</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Movies and TV</Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Music, CDs & Vinyl
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Pet Supplies</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Prime Video</Dropdown.Item>
              <Dropdown.Item href="#/action-2">software</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sports & Outdoors</Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                Tools $ Home Improvements
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Toys & Games</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Women's Fashion</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <input
            className="search-input"
            type="text"
            placeholder="Search Amazon"
          />

          <span className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </span>
        </div>

        <div className="languages">
          <img
            src="https://th.bing.com/th/id/OIP.769HmP7cJQYr9aylnF3x-wAAAA?pid=ImgDet&w=400&h=210&rs=1"
            alt="USA Flag"
          />
          <span className="header-optionTwo language">US</span>
        </div>

        <div className="header-nav">
          <Link to={!user && "/login"} className="custom-links">
            <div className="header-options" onClick={handleAuthentication}>
              <span className="header-optionOne">
                Hello  
                { user ? " " + user.email : " Sign in "} 
                </span>
              <span className="header-optionTwo">Accounts & Lists</span>
            </div>
          </Link>
         

          <Link to="/returns" className="custom-links">
            <div className="header-options">
              <span className="header-optionOne">Returns </span>
              <span className="header-optionTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/cart" className="custom-links">
            <div className="hearder-options">
              <span className="header-optionTwo prod-count">{basket?.length}</span>
              <span className="header-optionTwo icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
              </span>
            </div>
          </Link>
        </div>

        <div></div>
      </header>

      <div className="main-nav">
        <Link to="/sidebar" className="custom-links">
          <span>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
            All
          </span>
        </Link>

        <Link to="/deals" className="custom-links">
          <span>Today's Deals</span>
        </Link>

        <Link to="/customerService" className="custom-links">
          <span>Customer Service</span>
        </Link>

        <Link to="/registry" className="custom-links">
          <span>Registry</span>
        </Link>

        <Link to="/giftCards" className="custom-links">
          <span>Gift Cards</span>
        </Link>

        <Link to="/sell" className="custom-links">
          <span>Sell</span>
        </Link>
      </div>
          </>
        )
};

export default Header;
