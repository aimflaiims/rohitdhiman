import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

// API


// UI components
import ProfileHeader from './ProfileHeader.js';
import Header from './Header.js';
import About from './About.js';
import Skill from './Skill.js';
import Portfolio from './Portfolio.js';
import Experience from './Experience.js';
import Education from './Education.js';
import Reference from './Reference.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

export default class Index  extends Component{

  renderProfileHeader() {
    return(<ProfileHeader />);
  }

  renderHeader() {
    return(<Header />);
  }

  renderAbout() {
    return(<About />);
  }

  renderSkill() {
    return(<Skill />);
  }

  renderPortfolio() {
    return(<Portfolio />);
  }

  renderExperience() {
    return(<Experience />);
  }

  renderEducation() {
    return(<Education />);
  }

  renderReference() {
    return(<Reference />);
  }

  renderContact() {
    return(<Contact />);
  }

  renderFooter() {
    return(<Footer />);
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <div className="page-content">
          <div>
              {this.renderProfileHeader()}
              {this.renderAbout()}
              {this.renderSkill()}
              {this.renderPortfolio()}
              {this.renderExperience()}
              {this.renderEducation()}
              {this.renderReference()}
              {this.renderContact()}
          </div>
        </div>
        {this.renderFooter()}
      </div>
    );
  }
};
