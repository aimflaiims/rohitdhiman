import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';
import '../imports/api/experiences.js';

Meteor.startup(() => {
  // code to run on server at startup
  // process.env.MONGO_URL = "mongodb://rohitdhiman:Rdhi3512@ds125422.mlab.com:25422/rohitdhiman";
  // console.log(process.env);
});
