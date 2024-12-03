import React from "react";
import { Link } from "react-router-dom";

export default function ContactSalesBtn (){
    return(
        <>
        {/* <br/> */}
        <Link to="/contact"><p className="btn btn-primary mt-0 pt-0"><b>Contact Sales</b></p></Link>
        </>
    )
}