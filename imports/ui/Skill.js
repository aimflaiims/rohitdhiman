import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

export default class Skill extends Component{
  render() {
    return (
      <div className="section" id="skill">
        <div className="container">
          <div className="h4 text-center mb-4 title">Professional Skills</div>
          <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">PHP</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}} /><span className="progress-value">80%</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">JavaScript</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} /><span className="progress-value">75%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">MySQL</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}} /><span className="progress-value">60%</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">Ionic</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}} /><span className="progress-value">60%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">Laravel</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} /><span className="progress-value">75%</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">CakePHP</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}} /><span className="progress-value">70%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">CodeIgniter</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} /><span className="progress-value">75%</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">ReactJS</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}} /><span className="progress-value">70%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">Angular</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} /><span className="progress-value">75%</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">Meteor</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}} /><span className="progress-value">70%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">ExpressJS</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} /><span className="progress-value">75%</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">MongoDB</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}} /><span className="progress-value">70%</span>
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
