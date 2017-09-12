let express =require('express');
let router = express.Router();

let models = require('../models');
var utility = require('../helper/util.js');

router.get('/',(req, res)=>{
  res.render('login',{info:'Login tidak terdaftar!',err:false});
  // models.Petugas.create({
  //     user_id: 'teacher6',
  //     user_pass: '123',
  //     level_user:'teacher',
  //     salt:"123"
  // })
  // .then(result=>{
  //     models.Petugas.findAll()
  //     .then(allStudents => {
  //         res.send({students:allStudents});
  //     })
  // })
  // .catch(error=> {
  //    res.send(error);
  //    //res.send({error: error.errors[0].message,err:true});
  // });

});

router.post('/',(req, res)=>{
   models.Petugas.findOne({
       where: {user_id: req.body.user_id}
   })
  .then(userLogin => {
      if (userLogin==null) {
        res.render('login',{err:true, info:'Login tidak terdaftar!'});
      } else {
        let passFromTable = userLogin.user_pass;
        let passFromClien =  utility.getMd5(req.body.user_pass+userLogin.salt.trim());
        console.log(passFromTable+" "+passFromClien);
        if(passFromTable===passFromClien){
            req.session.login = {isLogin:true, err:false, level: userLogin.level_user};
            res.redirect('/index');
        }else{
            res.render('login',{err:true, info:'Password Salah!'});
        }
        //res.session.level = userLogin.level_user;

      }
  })

});


module.exports = router;
