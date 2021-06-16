const mysql = require("mysql2");

const getAllArticles = (req, res) => {
	const query = `SELECT * FROM articles`;
	
	connection.query(query,(err, results) => {
	  console.log(results);
	  res.json(results)
	});
};

const getArticlesByAuthor = (req, res) => {
	const author = req.query.author;

	const query = `SELECT * FROM articles WHERE author=?`;
	const data=[author]
	connection.query(query,data,(err, results) => {
	  console.log(results);
	  res.json(results)
	});
};

const getAnArticleById = (req, res) => {
	const _id = req.params.id;
	const author = req.query.firstName;

	const query = `SELECT * FROM articles WHERE id=? and author=?`;
	const data=[id,author]
	connection.query(query,data,(err, results) => {
	  console.log(results);
	  res.json(results)
	});
};

const createNewArticle = (req, res) => {
	const NewArticle={ title, description, author } = req.body;

	

	const command = `INSERT INTO roles (title, description,author)
	VALUES (title=?, description=?,author=?);`;
	
	const data = [NewArticle.title,NewArticle.description,NewArticle.author];
	db.query(command,data, (err, result) => {
	  if (err) throw err;
	  console.log('RESULT: ', result);
	   res.json(result);
	});

}
const updateAnArticleById = (req, res) => {
	const id = req.params.id;
	const updateArticle={ title, description, author } = req.body;

	const command = `UPDATE articles
	SET title=?, description=?,author=?
	WHERE id=?;`;
	
	const data = [id,updateArticle.title,updateArticle.description,updateArticle.author];
	db.query(command,data, (err, result) => {
	  if (err) throw err;
	  console.log('RESULT: ', result);
	   res.json(result);
	});;
};

const deleteArticleById = (req, res) => {
	const id = req.params.id;
	

	const command = `delete from  articles
	
	WHERE id=?;`;
	
	const data = [id];
	db.query(command,data, (err, result) => {
	  if (err) throw err;
	  console.log('RESULT: ', result);
	   res.json(result);
	});;
};

const deleteArticlesByAuthor = (req, res) => {
	const author = req.body.author;

	
	

	const command = `delete from  articles
	
	WHERE author=?;`;
	
	const data = [author];
	db.query(command,data, (err, result) => {
	  if (err) throw err;
	  console.log('RESULT: ', result);
	   res.json(result);
	});;
};

module.exports = {
	getAllArticles,
	getArticlesByAuthor,
	getAnArticleById,
	createNewArticle,
	updateAnArticleById,
	deleteArticleById,
	deleteArticlesByAuthor,
};
