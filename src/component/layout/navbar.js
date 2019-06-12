import React from 'react'
import {Link} from 'react-router-dom' 
import SignedInLinks from './signedIn.js'
import SignedOutLinks from './signedOut.js'



const Navbar = () => {

    return(
    <nav className = "nav-wrapper grey darken-3"> 
    <div className="container">

    <Link to ='./' className="brand-logo">EmpPlan</Link>
        <SignedInLinks></SignedInLinks>
        <SignedOutLinks></SignedOutLinks>
 

        </div>
    </nav>
    )


}

export default Navbar
