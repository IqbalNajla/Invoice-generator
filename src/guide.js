import React from "react";


const Guide = () => {
    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                <div className="row">
                <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                    <img src="./images/g1.jpg"/>
                </div>
                {/* 1st section right side data */}
                <div className="col-12 col-lg-7 our-services-list">
                <h3 className="mini-title">
                    --WELCOME TO THE INVOICING GUIDE--
                </h3>
                <h1 className="main-heading">Introduction.</h1>
                    <div className="row our-services-info">
                    <div className="col-1 our-services-number">1</div>
                    <div className="col-10 our-services-data">
                        <h2>What is an Invoies?</h2>
                        <p className="main-hero-para">An invoice is a bill for products or services rendered. By creating and sending a invoice, you are recording the fact that you provided a product or service and someone owes you payment for it</p>
                    </div>
                    </div>
                    <div className="row our-services-info">
                    <div className="col-1 our-services-number">2</div>
                    <div className="col-10 our-services-data">
                        <h2>why we need Invoices?</h2>
                        <p className="main-hero-para">If the product or service you’re selling isn’t paid in full up front, you need a formal way to request payment from your customer. You also need a way to keep track of payments due from specific customers.</p>
                    </div>
                    </div>
                <br/>
                <button className="btn-style btn-style-border">Learn More</button>
                </div>
                </div>
                </div>
            </section>

            {/* second part of how ge section */}
            <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                <div className="row">
                
                {/* 1st section right side data */}
                <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center
                align-items-start flex-column">
                <h3 className="mini-title">
                --KEEP THESE INFORMATION READY AHEAD OF TIME--
                </h3>
                <h1 className="main-heading">How to create Invoies?</h1>
                    <div className="row our-services-info">
                    <div className="col-1 our-services-number">1</div>
                    <div className="col-10 our-services-data">
                        <h2>Numbering system for invoices</h2>
                        <p className="main-hero-para">This can be as easy as starting with number 1. Knowing ahead of time will help you keep from duplicating invoices and causing confusion down the line.</p>
                    </div>
                    </div>
                    <div className="row our-services-info">
                    <div className="col-1 our-services-number">2</div>
                    <div className="col-10 our-services-data">
                        <h2>Contact information</h2>
                        <p className="main-hero-para">This includes your name (or business name) and the customer’s name, billing addresses, phone numbers and email addresses for both you and your customer.</p>
                    </div>
                    </div>
                    <div className="row our-services-info">
                    <div className="col-1 our-services-number">3</div>
                    <div className="col-10 our-services-data">
                        <h2>Invoice date, payment terms, and due date.</h2>
                        <p className="main-hero-para">The invoice date is the date you create the invoice and submit it to your customer. Payment terms can vary widely.The due date is the date payment is actually due to you, based on the payment terms you dictate.</p>
                    </div>
                    </div>
                    
                <br/>
                <button className="btn-style btn-style-border">Learn More</button>
                </div>
                <div className="col-12 col-lg-5 our-service-leftside-img">
                    <img src="./images/g5.svg"/>
                </div>
                </div>
                </div>
            </section>


            {/* 3RD section */}

            <section className="common-section our-services">
                <div className="container mb-5">
                <div className="row">
                <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                    <img src="./images/g4.png"/>
                </div>
                {/* 3RD section right side data */}
                <div className="col-12 col-lg-7 our-services-list">
                <h3 className="mini-title">
                    --ONCE YOU DOWNLOADED--
                </h3>
                <h1 className="main-heading">Sending Invoices.</h1>
                    <div className="row our-services-info">
                    <div className="col-1 our-services-number">1</div>
                    <div className="col-10 our-services-data">
                        <h2>Send through your email client</h2>
                        <p className="main-hero-para">Click Download Invoice. A copy of the invoice will be saved to your device. You can attach it to an email to send to your customer, or print a copy and pop it in the mail.</p>
                    </div>
                    </div>
                <br/>
              
                </div>
                </div>
                </div>
            </section>

 {/* 4TH part of how ge section */}
 <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                <div className="row">
                
                {/* 1st section right side data */}
                <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center
                align-items-start flex-column">
                <h3 className="mini-title">
                --AVAILABLE AND CAN ACCESS FROM ANYWHERE--
                </h3>
                <h1 className="main-heading">Getting Paid</h1>
                    <div className="row our-services-info">
                    <div className="col-1 our-services-number">1</div>
                    <div className="col-10 our-services-data">
                        <h2>How do I get Paid?</h2>
                        <p className="main-hero-para">Customers can pay using google pay or pay-pal.</p>
                    </div>
                    </div>
                    
                <br/>
                </div>
                <div className="col-12 col-lg-5 our-service-leftside-img">
                    <img src="./images/g3.avif"/>
                </div>
                </div>
                </div>
            </section>

        </>
);
}
export default Guide;