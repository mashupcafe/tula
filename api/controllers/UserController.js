/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function(req, res) {
		UserService.login(req.body, function(user) {
			if (user.length === 0) {
				return res.status(404).send('Invalid username or password.');
			}
			delete user[0].password;
			res.send(user[0]);
		});
	}
};
