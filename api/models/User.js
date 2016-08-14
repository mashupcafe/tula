/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'user',
  attributes: {
    uuid: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: 'email',
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    enabled: {
      type: 'boolean',
      required: true
    },
    roles: {
      type: 'string',
      required: true,
      enum: [ 'ADMIN', 'STAFF', 'PATIENT', 'DOCTOR' ]
    }
  }
};
