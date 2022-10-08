import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="p-4 align-self-center text-center text-lg-start bg-secondary bg-gradient text-muted">
  
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="text-dark me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    

    
    <div>
      <a href="/" className="me-4 text-reset">
      <i className="p-2 text-primary fa-brands fa-facebook"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="p-2 text-info fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="p-2 text-light fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="p-2 text-danger fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="p-2 text-secondary fab fa-linkedin"></i>
      </a>
      
    </div>
    
  </section>
 

 
  <section className="">
    <div className="text-dark container text-center text-md-start mt-5">
     
      <div className="text-dark row mt-3">
       
        <div className="text-dark col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-success text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Best Buy
          </h6>
          <h5>You can purchase products from our website for a cheap price !! </h5>
        </div>
        

       
        
       

       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-dark text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="/" className="text-reset">My shop</a>
          </p>
          <p>
            <a href="/" className="text-reset">Home</a>
          </p>
          <p>
            <a href="/about" className="text-reset">About us</a>
          </p>
          
        </div>
       

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="  fw-bold mb-4">Contact Us</h6>
          <p><i className="fas fa-home me-3"></i> Alexandria, EG 21523, Egypt</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            BestBuy@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
       
      </div>
     
    </div>
  </section>
  

  
    <div className="text-dark text-center p-4">
      © 2022 Copyright:
      <a className="text-dark font-weight-bold text-reset fw-bold" href="">BEST BUY</a>
    </div>
   
</footer>
        );
    }
}
 
export default Footer;