import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

export default class Education extends Component{
  render() {
    return (
      <div className="section">
        <div className="container cc-education">
          <div className="h4 text-center mb-4 title">Education</div>
          {/* <div className="card">
            <div className="row">
              <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body cc-education-header">
                  <p>2013 - 2015</p>
                  <div className="h5">Masters Degree</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body">
                  <div className="h5">Master of Information Technology</div>
                  <p className="category">University of Computer Science</p>
                  <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="card">
            <div className="row">
              <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body cc-education-header">
                  <p>2011 - 2015</p>
                  <div className="h5">Bachelors Degree</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body">
                  <div className="h5">Bachelor of Computer Science and Engineering</div>
                  <p className="category">Himachal Pradesh Technical University</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body cc-education-header">
                  <p>2009 - 2011</p>
                  <div className="h5">Senior Secondary School</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body">
                  <div className="h5">Science and Mathematics</div>
                  <p className="category">Himachal Pradesh Board of School Education</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
