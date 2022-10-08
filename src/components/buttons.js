import React from "react";
import Data from "../reducers/productsReducers";

const Buttons = ({ filterItem, setItem, menuItems }) => {
    return (
      <>
        <div className="m-4 d-flex justify-content-center">
          
        <a href="/home"  rel="noreferrer">
          
        
              <button
             
                className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                
              >
              All
              </button>
              </a>
              <a href="/home"  rel="noreferrer">
          <button
            className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
            
          >
            Phones
          </button> 
          </a>
          <a href="/home"  rel="noreferrer">
          <button
                className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              >
              Laptops
              </button>
              </a>
              <a href="/home"  rel="noreferrer">
              <button
                className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              >
              HeadPhones
              </button>
              </a>
              <a href="/home"  rel="noreferrer">
              <button
                className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              >
              Watches
              </button>
              </a>
         </div>
      </>
    );
  };

export default Buttons;