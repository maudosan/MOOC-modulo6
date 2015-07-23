var express = require('express');
var router = express.Router();

var quizController= require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Quiz' });
});

router.get('/author', function(req, res) {
	res.render('author', { author: 'Mauro D.S.' });
});

router.get('/quizzes/question', quizController.question);
router.get('/quizzes/answer', quizController.answer);


module.exports = router;
