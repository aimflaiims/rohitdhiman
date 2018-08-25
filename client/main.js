import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// import App from '../imports/ui/App.js';
import Index from '../imports/ui/Index.js';

Meteor.startup(() => {
  render(<Index />, document.getElementById('render-target'));
});
