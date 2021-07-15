import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id={12345}
          title="The Lean Startup: How Constant Innovation Creates Radically Successful"
          price={480}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/51CTIr1bJxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        />
        <Product
          id={12345}
          title="Apple AirPods with Charging Case"
          price={12490}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={12345}
          title="Chronograph Black Men Watch CH2882"
          price={5421}
          rating={3}
          image="https://m.media-amazon.com/images/I/81wGRwNp2VL._AC_UL320_.jpg"
        />
        <Product
          id={12345}
          title="Canon EOS 80D 24.2MP Digital SLR Camera (Black)"
          price={89990}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/514lNN6EfuL._SX300_SY300_QL70_FMwebp_.jpg"
        />{" "}
        <Product
          id={12345}
          title="HOF Office Chair Ergonomic Desk Chair"
          price={5999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81HWSoyYG9S._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={12345}
          title="Samsung 24 inch (60.4 cm) IPS, 3 Side Bezel Less Flat LED Monitor (Dark Blue Gray) 75 Hz - LS24R356FHWXXL"
          price={11699}
          rating={4}
          image="https://m.media-amazon.com/images/I/91TS0uHjMbL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
