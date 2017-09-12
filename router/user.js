let express =require('express');
let router = express.Router();

let models = require('../models');


router.use(function (req, res, next) {
  if ((req.session)&&(req.session.login)) {
  } else {
      next();
      res.redirect('/login') // arahkan login
  }
})

router.get('/',(req, res)=>{
   models.Petugas.all()
      .then(allUser => {
       //res.send({users:allUser});
      res.render('user',{users:allUser});
    })

});

router.get('/add',(req, res)=>{
    res.render('userAdd',{err:false});
})

router.post('/add',(req, res)=>{
   models.Petugas.create({
       user_id: req.body.user_id,
       user_pass: req.body.user_pass,
       rool:req.body.rool,
       salt: '123'
   })
   .then(result=>{
       res.redirect('/users');
   })
   .catch(error=> {
      res.send(error);
      //res.send({error: error.errors[0].message,err:true});
   });
});

router.get('/delete/:id',(req, res)=>{
  models.Petugas.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(result=>{
      res.redirect('/users');
  })
  .catch(error=> {
      res.send({error:error.stack});
  });
})

  router.get('/edit/:id',(req, res)=>{
  models.Petugas.findOne({
      where: {id: req.params.id}
  })
  .then(user => {
       res.send({user:user,edit:true});
       //res.render('UserEdit',{student:student});
  })
})

router.post('/edit/:id',(req, res)=>{
  models.Students.update({
    user_id: req.body.user_id,
    user_pass: req.body.user_pass,
    salt: '123'},
    {where: { id: req.params.id} }
  )
  .then(result=>{
    res.redirect('/users');
  })
  .catch(err=>{
    res.send({error:error.stack});
  })
})

module.exports = router;
