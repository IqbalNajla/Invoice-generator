import React from "react";

const Header = () => {
    return <>
    <header>
        <section className="container main-hero-container">
        <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
            <h1 className="display-2">Invoice Generator.</h1>
            <p className= "main-hero-para">Make beautiful invoices with one click!<br />
                Welcome to the original Invoice Generator, trusted by millions of people. Invoice Generator lets you instantly make invoices with our attractive invoice template straight from your web browser. The invoices you make can be sent and paid online or downloaded as a PDF.
                Invoice Generator lets you generate an unlimited number of invoices.</p>
            <h3>Start Generating Your beautiful Invoices!!</h3>
            <div className="input-group mt-3">
            <input type="text" className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text"/>
            <div className="input-group-button">
                Get Start
            </div>

            </div>
            </div>
            {/* main header */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
                <img src="./images/i1.avif" alt="image 1" className="img-fluid"/>
                <img src="./images/dod.jpg" alt="image 2" className="img-fluid main-hero-img2"/>
            </div>
        </div>
        </section>
    </header>
    </>
};

export default Header;