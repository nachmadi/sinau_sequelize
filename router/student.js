let express =require('express');
let router = express.Router();

let models = require('../models');


router.use(function (req, res, next) {
  if ((req.session)&&(req.session.login)) {
      next();
  } else {
      res.redirect('/login') // arahkan login
  }
})

router.get('/',(req, res)=>{
   models.Students.all()
      .then(allStudents => {
       //res.send({students:allStudents});
      res.render('student',{students:allStudents});
    })

});

router.get('/add',(req, res)=>{
    res.render('studentAdd',{err:false});
})

router.post('/add',(req, res)=>{
   models.Students.create({
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       email: req.body.email
   })
   .then(result=>{
       res.redirect('/students/add');
   })
   .catch(error=> {
      res.render('studentAdd',{error: error.errors[0].message,err:true});
      //res.send({error: error.errors[0].message,err:true});
   });
});

router.get('/delete/:id',(req, res)=>{
  models.Students.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(result=>{
      res.redirect('/students');
  })
  .catch(error=> {
      res.send({error:error.stack});
  });
})

router.get('/edit/:id',(req, res)=>{
  models.Students.findOne({
      where: {id: req.params.id}
  })
  .then(student => {
      models.Students.all()
      .then(allStudents => {
           //res.send({students:allStudents,student:student,edit:true});
           res.render('studentEdit',{student:student});
      })

  })
})

router.post('/edit/:id',(req, res)=>{
  models.Students.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email},
    {where: { id: req.params.id} }
  )
  .then(result=>{
    res.redirect('/students');
  })
  .catch(err=>{
    res.send({error:error.stack});
  })
})

router.get('/addSubject/:id',(req, res)=>{
  models.Students.findOne({
      where: {id: req.params.id}
  })
  .then(student => {
        models.Subject.all()
        .then(allSubject => {
            res.send({student:student, subject:allSubject});
            //res.render('studentSubjectAdd',{student:student, subject:allSubject});
    })
  })
})

router.post('/addSubject/:id',(req, res)=>{
   models.StudentSubjects.create({
       StudentId : req.params.id,
       SubjectId : req.body.SubjectId
   })
   .then(result=>{
       res.redirect('/students');
   })
   .catch(error=> {
      res.render('studentSubjectAdd',{error: error.errors[0].message,err:true});
      //res.send({error: error.errors[0].message,err:true});
   });
});



module.exports = router;
