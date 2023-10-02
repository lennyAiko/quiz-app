module.exports = {

  friendlyName: 'Index',

  description: 'Index home.',

  inputs: {  },

  exits: {  },

  fn: async function () {
    // All done.
    return sails.inertia.render('index');

  }

};
