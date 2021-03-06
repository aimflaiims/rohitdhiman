import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

export default class Portfolio extends Component{
  render() {
    return (
      <div className="section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto">
              <div className="h4 text-center mb-4 title">Portfolio</div>
              <div className="nav-align-center">
                <ul className="nav nav-pills nav-pills-primary" role="tablist">
                  <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#web-development" role="tablist"><i className="fa fa-laptop" aria-hidden="true" /></a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#graphic-design" role="tablist"><i className="fa fa-picture-o" aria-hidden="true" /></a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Photography" role="tablist"><i className="fa fa-camera" aria-hidden="true" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content gallery mt-5">
            <div className="tab-pane active" id="web-development">
              <div className="ml-auto mr-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="http://206.189.185.6/" target="_blank">
                      <figure className="cc-effect"><img src="images/abaco.png" alt="Image" />
                        <figcaption>
                          <div className="h4">Abaco</div>
                          <p>Youtube Marketing Tool</p>
                        </figcaption>
                      </figure></a>
                    </div>
                    
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://devconnector-beta.herokuapp.com/" target="_blank">
                        <figure className="cc-effect"><img src="images/dev-con.png" alt="Image" />
                          <figcaption>
                            <div className="h4">Dev Connector</div>
                            <p>MERN Stack App</p>
                          </figcaption>
                        </figure></a></div>
                  </div>
                  <div className="col-md-6">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://pareaonline.com/" target="_blank">
                        <figure className="cc-effect"><img src="images/parea.png" alt="Image" />
                          <figcaption>
                            <div className="h4">Parea Online</div>
                            <p>MLM Business Portal</p>
                          </figcaption>
                        </figure></a></div>
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://app-aurora.com/pin/" target="_blank">
                        <figure className="cc-effect"><img src="images/aurora.png" alt="Image" />
                          <figcaption>
                            <div className="h4">Aurora</div>
                            <p>Pinterest Martketing Tool</p>
                          </figcaption>
                        </figure></a>
                    </div>
                    
                  </div>

                  <div className="col-md-6">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://crazy-snake.herokuapp.com/" target="_blank">
                      <figure className="cc-effect"><img src="images/crazy-snake.png" alt="Image" />
                        <figcaption>
                          <div className="h4">Crazy Snake</div>
                          <p>React App</p>
                        </figcaption>
                      </figure></a>
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://www.globalfitness.com/" target="_blank">
                      <figure className="cc-effect"><img src="images/globalfitness.png" alt="Image" />
                        <figcaption>
                          <div className="h4">Global Fitness</div>
                          <p>E-Commerce Site</p>
                        </figcaption>
                      </figure></a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="graphic-design" role="tabpanel">
              <div className="ml-auto mr-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                        <figure className="cc-effect"><img src="images/graphic-design-1.jpg" alt="Image" />
                          <figcaption>
                            <div className="h4">Triangle Pattern</div>
                            <p>Graphic Design</p>
                          </figcaption>
                        </figure></a></div>
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                        <figure className="cc-effect"><img src="images/graphic-design-2.jpg" alt="Image" />
                          <figcaption>
                            <div className="h4">Abstract Umbrella</div>
                            <p>Graphic Design</p>
                          </figcaption>
                        </figure></a></div>
                  </div>
                  <div className="col-md-6">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                        <figure className="cc-effect"><img src="images/graphic-design-3.jpg" alt="Image" />
                          <figcaption>
                            <div className="h4">Cube Surface Texture</div>
                            <p>Graphic Design</p>
                          </figcaption>
                        </figure></a></div>
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                        <figure className="cc-effect"><img src="images/graphic-design-4.jpg" alt="Image" />
                          <figcaption>
                            <div className="h4">Abstract Line</div>
                            <p>Graphic Design</p>
                          </figcaption>
                        </figure></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="Photography" role="tabpanel">
              <div className="ml-auto mr-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#Photography">
                        <figure className="cc-effect"><img src="images/photography-1.jpg" alt="Image" />
                          <figcaption>
                            <div className="h4">Photoshoot</div>
                            <p>Photography</p>
                          </figcaption>
                        </figure></a></div>
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#Photography">
                        <figure className="cc-effect"><img src="images/photography-3.jpg" alt="Image" />
                          <figcaption>
                            <div className="h4">Wedding Photoshoot</div>
                            <p>Photography</p>
                          </figcaption>
                        </figure></a></div>
                  </div>
                  <div className="col-md-6">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#Photography">
                        <figure className="cc-effect"><img src="images/photography-2.jpg" alt="Image" />
                          <figcaption>
                            <div className="h4">Beach Photoshoot</div>
                            <p>Photography</p>
                          </figcaption>
                        </figure></a></div>
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#Photography">
                        <figure className="cc-effect"><img src="images/photography-4.jpg" alt="Image" />
                          <figcaption>
                            <div className="h4">Nature Photoshoot</div>
                            <p>Photography</p>
                          </figcaption>
                        </figure></a></div>
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
