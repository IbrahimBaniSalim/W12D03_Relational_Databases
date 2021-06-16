const roleModel = require('./../../db./schema.sql');

const createNewRole = (req, res) => {
	const newRole={role_id, role } = req.body;

	const command = `INSERT INTO roles (role_id, role)
	VALUES (role_id=? ,role=?);`;
	
	const data = [newRole.role_id,newRole.role];
	db.query(command,data, (err, result) => {
	  if (err) throw err;
	  console.log('RESULT: ', result);
	   res.json(result);
	});

};
/////////////////

  






















module.exports = {
	createNewRole,
};
