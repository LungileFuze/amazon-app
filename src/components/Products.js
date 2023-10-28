import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="products-row">
        <Product
          id="1"
          title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light (Blue)"
          image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX679_.jpg"
          rating="4"
          price="336.86"
        />{" "}
        <Product
          id="1"
          title="Lenovo 2022 Newest Ideapad 3 Laptop, 15.6 HD Touchscreen, 11th Gen Intel Core i3-1115G4 Processor"
          image="https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_UL480_QL65_.jpg"
          rating="4"
          price="557.99"
        />{" "}
      </div>

      <div className="products-row">
        <Product
          id="1"
          title="SAMSUNG Galaxy Tab S6 Lite 10.4 128GB Android Tablet, S Pen Included, Slim Metal Design, AKG Dual Speakers, Long Lasting Battery"
          image="https://m.media-amazon.com/images/I/718B6zl+b6L._AC_SY300_SX300_.jpg"
          rating="4"
          price="5222.59"
        />{" "}
        <Product
          id="1"
          title="RAINBEAR Smart Water Level Monitor Desk Mount WiFi LCD Starter Pack"
          image="https://m.media-amazon.com/images/I/51ilHXrxpIL._AC_UL480_QL65_.jpg"
          rating="4"
          price="3222.59"
        />{" "}
        <Product
          id="1"
          title="NETGEAR WiFi Range Extender EX5000 - Coverage up to 1500 Sq.Ft. and 25 Devices, WiFi Extender AC1200"
          image="https://m.media-amazon.com/images/I/51hINoMSj2L._AC_UL480_QL65_.jpg"
          rating="4"
          price="1734.86"
        />{" "}
      </div>

      <div className="products-row">
        <Product
          id="1"
          title="LG FHD 27-Inch Computer Monitor 27MP450-B, IPS with AMD FreeSync, Black"
          image="https://m.media-amazon.com/images/I/817ZrXqz3LL._AC_SX679_.jpg"
          rating="4"
          price="2756.99"
        />{" "}
      </div>
    </>
  );
};

export default Products;
