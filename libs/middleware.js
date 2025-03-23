const verifyUser = (req,res,next)=> {
    if(!req.session.userId){
        return res.redirect(('/login'));
    }
    next();
};

module.exports = {
    verifyUser,
};

// Redirect Authenticated User
const redirectAuthenticated = (req,res,next) =>{
    if(req.session.userId){
        return res.redirect('/dashboard');
    }
    next();
};

module.exports = {
    verifyUser,
    redirectAuthenticated
};