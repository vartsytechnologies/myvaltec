import React from "react";
import MarketCard from "./components/MarketCard";
import Banner from "../../../src/components/banner/Banner"


export default function Markets(){
    return (
      <div>
       
        <div>
          <Banner title="Market Page"/>
          <MarketCard />
        </div>
      </div>
    );
}