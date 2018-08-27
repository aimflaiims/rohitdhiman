import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

export default class About extends Component{
  render() {
    return (
      <div className="section" id="about">
        <div className="container">
          <div className="card" data-aos="fade-up" data-aos-offset={10}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">About</div>
                  <p>Hello! I am Rohit Dhiman. Web Developer, Graphic Designer and Photographer.</p>
                  <p>This is my resume and portfolio build on Meteor Stack with React.js, MongoDB and GraphQL.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">Basic Information</div>
                  <div className="row">
                    <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                    <div className="col-sm-8">24</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                    <div className="col-sm-8">errohitdhiman@hotmail.com</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
                    <div className="col-sm-8">+91-7018586763</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                    <div className="col-sm-8">House No. 327, Sector 15, Panchkulla, Haryana, India</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
                    <div className="col-sm-8">English, Hindi, Punjabi</div>
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
