const registrationPage = (req,res) =>{
  res.status(200).render('registration');
};
const signinPage = (req,res)=> {
 //TODO LETER
 res.status(200).render('signin');
}
module.exports={
signinPage,
registrationPage,
}