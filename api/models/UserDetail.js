/**
 * UserDetail.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'user_detail',
  attributes: {
    uuid: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    gender: {
      type: 'string',
      enum: [ 'MALE', 'FEMALE', 'TRANSGENDER' ]
    },
    address1: {
      type: 'string'
    },
    address2: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    phone1: {
      type: 'integer'
    },
    phone2: {
      type: 'integer'
    },
    user: {
      model: 'user',
      unique: true
    }
  }
};
