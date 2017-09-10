
let express =require('express');
let router = express.Router();

let models = require('../models');

router.get('/',(req, res)=>{
   models.Subject.all()
      .then(allSubject => {
      //res.send({subjects:allSubject});
      res.render('subject',{subjects:allSubject,edit:false});
    })

});

router.get('/tomany',(req, res)=>{
  models.Subject.findAll({ include: [ models.Teacher ] })
   .then(subject => {
    console.log(subject);
    res.send(subject);
  })
});

router.get('/many',(req, res)=>{
  models.Subject.findAll({
    where: { SubjectId:1},
    include: [models.StudentSubjects]
  }).then((results) => {
    console.log(results);
    res.send(results);
  });

});


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
