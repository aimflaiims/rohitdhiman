import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

export default class Contact extends Component{
  render() {
    return (
      <div className="section" id="contact">
        <div className="cc-contact-information" style={{backgroundImage: 'url("images/staticmap.png")'}}>
          <div className="container">
            <div className="cc-contact">
              <div className="row">
                <div className="col-md-9">
                  <div className="card mb-0" data-aos="zoom-in">
                    <div className="h4 text-center title">Contact Me</div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card-body">
                          <form action="https://formspree.io/errohitdhiman@hotmail.com" method="POST">
                            <div className="p pb-3"><strong>Feel free to contact me </strong></div>
                            <div className="row mb-3">
                              <div className="col">
                                <div className="input-group"><span className="input-group-addon"><i className="fa fa-user-circle" /></span>
                                  <input className="form-control" type="text" name="name" placeholder="Name" required="required" />
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col">
                                <div className="input-group"><span className="input-group-addon"><i className="fa fa-file-text" /></span>
                                  <input className="form-control" type="text" name="Subject" placeholder="Subject" required="required" />
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col">
                                <div className="input-group"><span className="input-group-addon"><i className="fa fa-envelope" /></span>
                                  <input className="form-control" type="email" name="_replyto" placeholder="E-mail" required="required" />
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col">
                                <div className="form-group">
                                  <textarea className="form-control" name="message" placeholder="Your Message" required="required" defaultValue={""} />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <button className="btn btn-primary" type="submit">Send</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <p className="mb-0"><strong>Address </strong></p>
                          <p className="pb-2">House No. 327, Sector 15, Panchkulla, Haryana, India</p>
                          <p className="mb-0"><strong>Phone</strong></p>
                          <p className="pb-2"><a href="tel:+91-7018586763">+91-7018586763</a></p>
                          <p className="mb-0"><strong>Email</strong></p>
                          <p><a href="mailto:errohitdhiman@hotmail.com" target="_top">errohitdhiman@hotmail.com</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
