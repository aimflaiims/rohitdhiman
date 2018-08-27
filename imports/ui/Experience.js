import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

// API
import { Experiences } from '../api/experiences.js';


export default class Experience extends Component{

  // renderExperiences() {
  //   return this.props.experiences.map((experience) => (
  //     <Experience key={experience._id} company={experience.company} />
  //   ));
  // }
  componentDidMount() {
    // Create a new message.
    // Experiences.insert({ company: 'Hello, world!' });
    console.log('I was triggered during componentDidMount')
    // Return an array of my messages.
    console.log(Experiences);
    const xp = Experiences.find().fetch();
    console.log(xp);
  }

  render() {
    return (
      <div className="section" id="experience">
        <div className="container cc-experience">
          <div className="h4 text-center mb-4 title">Work Experience</div>
          <div className="card">
            <div className="row">
              <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body cc-experience-header">
                  <p>June 2018 - Present</p>
                  <div className="h5">Pixel Softwares</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body">
                  <div className="h5">Web Developer</div>
                  <p>Responsible for Web Site and API development.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body cc-experience-header">
                  <p>December 2017 - March 2017</p>
                  <div className="h5">Master Software Solutions</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body">
                  <div className="h5">Web Developer</div>
                  <p>Worked on Cake PHP, Codeigniter and ReactJS projects.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body cc-experience-header">
                  <p>April 2016 - August 2017</p>
                  <div className="h5">Osvin WebSolutions</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body">
                  <div className="h5">Web and Hybrid App Developer</div>
                  <p>Worked on Codeigniter, Core PHP, Ionic.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body cc-experience-header">
                  <p>January 2016 - March 2016</p>
                  <div className="h5">IT MOnks Pvt. Ltd.</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body">
                  <div className="h5">Jr. Web Developer</div>
                  <p>Worked on Core PHP and Wordpress</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body cc-experience-header">
                  <p>June 2014 - July 2014</p>
                  <div className="h5">Solitair Infosys Pvt. Ltd.</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                <div className="card-body">
                  <div className="h5">Intern</div>
                  <p>Worked on Core PHP and HTML5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
