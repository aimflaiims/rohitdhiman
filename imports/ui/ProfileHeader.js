import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

export default class ProfileHeader extends Component{
  render() {
    return (
      <div className="profile-page">
        <div className="wrapper">
          <div className="page-header page-header-small" filter-color="green">
            <div className="page-header-image" data-parallax="true" style={{backgroundImage: 'url("images/cc-bg-1.jpg")'}} />
            <div className="container">
              <div className="content-center">
                <div className="cc-profile-image"><a href="#"><img src="images/rohit.jpg" alt="Image" /></a></div>
                <div className="h2 title">Rohit Dhiman</div>
                <p className="category text-white">Web Developer, System Admin,  Backpacker</p><a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Hire Me</a><a className="btn btn-primary" href="#" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a>
              </div>
            </div>
            <div className="section">
              <div className="container">
                <div className="button-container">
                  <a className="btn btn-default btn-round btn-lg btn-icon" href="https://www.fb.com/aimflaiims" target="_blank" rel="tooltip" title="Follow me on Facebook"><i className="fa fa-facebook" /></a>
                  <a className="btn btn-default btn-round btn-lg btn-icon" href="https://www.twitter.com/aimflaiims" target="_blank" rel="tooltip" title="Follow me on Twitter"><i className="fa fa-twitter" /></a>
                  <a className="btn btn-default btn-round btn-lg btn-icon" href="https://plus.google.com/+RohitDhimanPro" target="_blank" rel="tooltip" title="Follow me on Google+"><i className="fa fa-google-plus" /></a>
                  <a className="btn btn-default btn-round btn-lg btn-icon" href="https://www.instagram.com/aimflaiims/" target="_blank" rel="tooltip" title="Follow me on Instagram"><i className="fa fa-instagram" /></a>
                  <a className="btn btn-default btn-round btn-lg btn-icon" href="https://medium.com/@errohitdhiman" target="_blank" rel="tooltip" title="Follow me on Medium"><i className="fa fa-medium" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
