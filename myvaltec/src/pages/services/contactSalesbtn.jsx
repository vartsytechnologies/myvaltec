import React from "react";
import { Link } from "react-router-dom";

export default function ContactSalesBtn (){
    return(
        <>
        {/* <br/> */}
        <Link to="/contact"><p className="btn btn-primary"><b>Contact Sales</b></p></Link>
        </>
    )
}