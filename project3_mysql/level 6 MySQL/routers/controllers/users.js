const usersModel = require('./../../db/models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

users.pre('save', async function () {
	this.email = this.email.toLowerCase();
	this.password = await bcrypt.hash(this.password, 10);
});

// BASIC AUTH
users.statics.authenticateBasic = async function (email, password) {
	try {
		const user = await this.findOne({ email });
		if (!user) return ["The email doesn't exist", 404];

		const valid = await bcrypt.compare(password, user.password);
		if (valid) {
			const payload = {
				userId: user._id,
				country: user.country,
				role: user.role,
			};

			const options = {
				expiresIn: '60m',
			};

			return [jwt.sign(payload, process.env.SECRET, options), 200];
		}
		return ['The password you’ve entered is incorrect', 403];
	} catch (error) {
		throw new Error(error.message);
	}
};





const createNewAuthor = (req, res) => {
	const newUser= { firstName,lastName,age, country, email, password,role } = req.body;

					

					const command = `INSERT INTO roles (firstName,lastName,age, country, email, password,role)
					VALUES (firstName=? ,lastName=?,age=?,country=?,email=?,password=?,role=?);`;
					
					const data = [newUser.firstName,newUser.lastName,newUser.age,newUser.country,newUser.email,newUser.password,newUser.role];
					db.query(command,data, (err, result) => {
					  if (err) throw err;
					  console.log('RESULT: ', result);
					   res.json(result);
					});
				
};

module.exports = {
	createNewAuthor,
};
