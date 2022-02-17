async function redirectDomainsMiddleware(req, res, next){

  if(req.hostname == 'srnstreamer-1.herokuapp.com'){
    return res.redirect('https://srnstreamer.live' + req.path);
  }

  next();

}

module.exports = redirectDomainsMiddleware;