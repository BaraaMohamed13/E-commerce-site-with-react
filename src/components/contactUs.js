import React, { Component } from 'react';

class ContactUs extends Component {
    state = {  } 
    render() { 
        return (
            <>

<section className="mb-4">


    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

    <p className="text-center w-responsive mx-auto mb-5 font-weight-bold">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">


        <div className="p-3 col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                <div className="row">


                    <div className="col-md-6">
                        <div className="md-form mb-0">
                        <label>
 
    <input type="text" id="name" name='name' className="form-control"/>
  </label>
                            
                            <label for="name" className="m-3">Your name</label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="md-form mb-0">
                           

                        <label>
    
    <input type="text" id="email" name='email' className="form-control"/>
  </label>



                          




                            <label for="email" className="m-3">Your email</label>
                        </div>
                    </div>


                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">

                        <label>
  
    <input type="text" id="subject" name='subject' className="form-control"/>
  </label>


                          



                            <label for="subject" className="m-3">Subject</label>
                        </div>
                    </div>
                </div>

                <div className="row">


                    <div className="col-md-12">

                        <div className="md-form">
                        <label for="message" className='m-3'>Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            
                        </div>

                    </div>
                </div>


            </form>

            <div class="text-center text-md-left">
                <a class="m-5 p-2 btn btn-primary d-flex justify-content-center" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>

        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Alexandria, EG 21523, Egypt</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>BestBuy@gmail.com</p>
                </li>
            </ul>
        </div>


    </div>

</section>

         </>
        );
    }
}
 
export default ContactUs;