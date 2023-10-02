/**
 * Subject.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    img: {
      type: 'string',
      isUrl: true
    },

    name: {
      type: 'string',
      maxLength: 30,
      required: true
    },

    questions: {
      collection: 'question',
      via: 'subject'
    }

  },

};

