var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var modelTeachers = require('./router/teacher.js');
var modelSubjects = require('./router/subject.js');
var modelStudents = require('./router/student.js');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// deklarasi letak file.js {otomatis di tambah s}
app.set('view engine', 'ejs');


app.use('/teachers', modelTeachers);
app.use('/subjects', modelSubjects);
app.use('/students', modelStudents);

app.listen(3000,()=>{
  console.log('Listening Port 3000')
});
