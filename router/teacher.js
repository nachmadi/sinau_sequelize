
let express =require('express');
let router = express.Router();

let models = require('../models');

router.get('/',(req, res)=>{
   models.Teacher.all({include:[{model:models.Subject}]})
      .then(allTeachers => {
        //console.log(allTeachers[0].Suject.subject_name);
       //res.send({teachers:allTeachers});
        res.render('teacher',{teachers:allTeachers});
    })
});

router.get('/add',(req, res)=>{
      res.render('teacherAdd',{err:false});
});

router.post('/add',(req, res)=>{
   models.Teacher.create({
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       email: req.body.email
   })
   .then(result=>{
       res.redirect('/teachers/add');
   })
   .catch(error=> {
      res.render('teacherAdd',{error: error.errors[0].message,err:true});
      //res.send({error: error.errors[0].message,err:true});
   });
});

router.get('/delete/:id',(req, res)=>{
  models.Teacher.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(result=>{
      res.redirect('/teachers');
  })
  .catch(error=> {
      res.send({error:error.stack});
  });
})

router.get('/edit/:id',(req, res)=>{
  models.Teacher.findOne({
      where: {id: req.params.id},include:[{model:models.Subject}]
  })
  .then(teacher => {
      models.Subject.all()
      .then(allSubject => {
           //res.send({teacher:teacher,subject:allSubject});
           res.render('teacherEdit',{teacher:teacher,subject:allSubject});
      })

  })
})

router.post('/edit/:id',(req, res)=>{
  models.Teacher.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    SubjectId : req.body.SubjectId },
    {where: { id: req.params.id} }
  )
  .then(result=>{
    res.redirect('/teachers');
  })
  .catch(err=>{
    res.send({error:error.stack});
  })
})


// router.post('/',(req, res)=>{
//    modulUser.insertUsers(
//      req.body,
//      (err)=>{
//         res.redirect('/');
//      })
// });
//
// router.get('/delete/:id',(req, res)=>{
//     modulUser.deleteUsers(req.params.id,(err)=>{
//         res.redirect('/users');
//     })
// })
//
// router.get('/edit/:id',(req, res)=>{
//     modulUser.editUsers(req.params.id,(dataAllUser)=>{
//         //res.send(dataAllUser);
//         res.render('users',dataAllUser);
//     })
// })
//
// router.post('/edit/:id',(req, res)=>{
//   modulUser.saveUsers(req.body,req.params.id,(err)=>{
//     res.redirect('/users');
//   })
// })
//
// router.get('/detil/:id',(req, res)=>{
//   modulAddr.oneToManyUsers(req.params.id,(dataAllUser)=>{
//       //res.send(dataAllUser);
//       res.render('one_to_many',dataAllUser);
//   })
// })

module.exports = router;
