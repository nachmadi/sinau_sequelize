
let express =require('express');
let router = express.Router();

router.use(function (req, res, next) {
  if ((req.session)&&(req.session.login)) {
      next();
  } else {
      res.redirect('/login') // arahkan login
  }
})


let models = require('../models');

// router.get('/',(req, res)=>{
//    models.Subject.all()
//       .then(allSubject => {
//       //res.send({subjects:allSubject});
//       res.render('subject',{subjects:allSubject});
//     })
//
// });

router.get('/',(req, res)=>{
  models.Subject.all(
    {
    //where: { SubjectId:1},
    include:[{ model:models.Teacher}]
  }
).then((results) => {
    // console.log(results);
    res.render('subject',{subjects:results});
    //res.send(results);
  });
});


router.get('/tomany',(req, res)=>{
  models.StudentSubjects.findAll({ include: [ models.Students ] })
   .then(subject => {
    res.send({subject:subject});
  })
});

router.get('/:id/enrolledstudents',(req, res)=>{
  models.Subject.findOne(
    {
    where: {id:req.params.id},
    include:[{ model:models.Students}]
  }
).then((results) => {
    // console.log(results);
    res.render('subjectEnrollStudent',{subjects:results});
    //res.send({subjects:results});
  });
});

module.exports = router;
