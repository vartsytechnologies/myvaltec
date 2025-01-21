import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ContactSalesBtn() {
  return (
    <>
      {/* <br/> */}
      {/* <Link to="/contact">
        <p className="btn btn-primary mt-0 pt-0">
          <b>Contact Sales</b>
        </p>
      </Link> */}
      <Button className="mb-2 " href="/contact" variant="primary">
        Contact Sales
      </Button>
    </>
  );
}
