/**
 * DoctorLogs.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'doctor_logs',
  attributes: {
    uuid: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    inTime: {
      type: 'datetime'
    },
    outTime: {
      type: 'datetime'
    },
    clinic: {
      model: 'clinic'
    },
    doctor: {
      model: 'doctor'
    }
  }
};
