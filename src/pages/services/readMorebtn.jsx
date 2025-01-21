import React from "react";
import { Button } from "react-bootstrap";

export default function ReadMorebtn({ onClick }) {
  return (
    <>
      <Button className="mb-2 ms-3" variant="secondary" onClick={onClick}>
        Read More
      </Button>
    </>
  );
}
