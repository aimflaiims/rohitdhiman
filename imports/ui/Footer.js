import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

export default class Footer extends Component{
  render() {
    return (
      <footer className="footer">
        <div className="container text-center">
          <a className="cc-facebook btn btn-link" href="https://www.fb.com/aimflaiims" target="_blank"><i className="fa fa-facebook fa-2x " aria-hidden="true" /></a>
          <a className="cc-twitter btn btn-link " href="https://www.twitter.com/aimflaiims" target="_blank"><i className="fa fa-twitter fa-2x " aria-hidden="true" /></a>
          <a className="cc-google-plus btn btn-link" href="https://plus.google.com/+RohitDhimanPro" target="_blank"><i className="fa fa-google-plus fa-2x" aria-hidden="true" /></a>
          <a className="cc-instagram btn btn-link" href="https://www.instagram.com/aimflaiims/" target="_blank"><i className="fa fa-instagram fa-2x " aria-hidden="true" /></a>
          <a className="cc-medium btn btn-link" href="https://medium.com/@errohitdhiman" target="_blank"><i className="fa fa-medium fa-2x " aria-hidden="true" /></a>
        </div>
          <div className="h4 title text-center">Rohit Dhiman</div>
          <div className="text-center text-muted">
          <p>© Creative CV. All rights reserved.<br />Design - <a className="credit" href="https://templateflip.com" target="_blank">TemplateFlip</a></p>
        </div>
      </footer>
    );
  }
};
