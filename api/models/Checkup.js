/**
 * Checkup.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'checkup',
  attributes: {
    uuid: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    staff: {
      model: 'staff'
    },
    patient: {
      model: 'patient'
    },
    consultedBy: {
      model: 'doctor'
    },
    consultedAt: {
      model: 'clinic'
    },
    consultedFor: {
      type: 'mediumtext'
    },
    treatment: {
      type: 'mediumtext'
    },
    treatmentInDetail: {
      type: 'longtext'
    },
    drug_list: {
      type: 'json'
    },
    status: {
      type: 'string',
      enum: [ 'IN_PROGRESS', 'COMPLETED' ]
    }
  }
};
