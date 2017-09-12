var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
//var passwordHash = require('password-hash');
var md5 = require('md5');


var modelLogin = require('./router/login.js');
var modelIndex = require('./router/index.js');
var modelUsers = require('./router/user.js');
var modelTeachers = require('./router/teacher.js');
var modelSubjects = require('./router/subject.js');
var modelStudents = require('./router/student.js');

//var utility = require('./helper/util.js');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// init session scresst di pancign dgn sembarang kata , awal wajib ada
// untuk deve cokie : {} tdk https

app.use(session({
  secret: 'rahasia',
  cookie: {}
}))

// deklarasi letak file.js {otomatis di tambah s}
app.set('view engine', 'ejs');

app.use('/login', modelLogin);
app.use('/index', modelIndex);
app.use('/users', modelUsers);
app.use('/teachers', modelTeachers);
app.use('/students', modelStudents);
app.use('/subjects', modelSubjects);

// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});

app.use(function (req, res) {
  if ((req.session)&&(req.session.login)) {
      res.redirect('/index');
  } else {
      res.redirect('/login') // arahkan login
  }
})

app.listen(process.env.PORT||3001,()=>{
  console.log('Listening Port 3001')
});
