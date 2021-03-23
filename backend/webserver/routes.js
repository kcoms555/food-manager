const express = require('express');
const session = require('express-session');
const app = express();

const PORT = 3001;

//express setting
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(function(req, res, next){
	res.setHeader("content-Type", "application/json");
	next();
});

//session setting
app.use(session({
	resave: false,
	saveUninitialized: false,
	rolling: true,
	secret: 'Food-Maaaannngger',
	cookie: {
		secure: false, //nginx가 https를 1차적으로 받기에 false, true시 local에서는 평문 통신이기에 세션 이용 불가능
		maxAge: 1000 * 60 * 60 * 24 * 3 // 3days
	}
}));

const api = require('./controller/api.js')
app.use('/api', api);

app.listen(PORT, () => {
	console.log(`port ${PORT} open!\n`);
});
