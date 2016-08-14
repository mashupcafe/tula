// User service

module.exports = {
  login: function(data, next) {
    User.find({ where: { email: data.email, password: data.password } })
    .exec(function(err, user) {
      if (err) {
        throw err;
      }
      next(user);
    })
  }
}
