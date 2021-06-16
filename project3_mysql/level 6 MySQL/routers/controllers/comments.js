const commentsModel = require('./../../db/models/comments');

const createNewComment = (req, res) => {
	const articleId = req.params.id;

	const NewComment= { comment, commenter } = req.body;
	const command = `INSERT INTO Comment (comment, commenter)
	VALUES (comment=?, commenter=?);`;
	
	const data = [NewComment.comment,NewComment.commenter];
	db.query(command,data, (err, result) => {
	  if (err) throw err;
	  console.log('RESULT: ', result);
	   res.json(result);
	});


	
};




	

	















module.exports = {
	createNewComment,
};
