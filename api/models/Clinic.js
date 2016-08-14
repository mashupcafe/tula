/**
 * Clinic.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'clinic',
  attributes: {
    uuid: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      required: true
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
    manager: {
      type: 'string'
    },
    managerPhone1: {
      type: 'integer'
    },
    managerPhone2: {
      type: 'integer'
    },
    address1: {
      type: 'string'
    },
    address2: {
      type: 'string'
    },
    phone1: {
      type: 'integer'
    },
    phone2: {
      type: 'integer'
    }
  }
};
