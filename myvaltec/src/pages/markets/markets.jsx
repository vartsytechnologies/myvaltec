import React from "react";
import MarketCard from "./MarketCard";
import { Container } from "react-bootstrap";
import Banner from "../../../src/components/banner/Banner";

export default function Markets() {
  return (
    <>
      <Container fluid>
        <Banner title="Market Page" />
        <Container>
          <div>
            <div>
              <MarketCard />
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
