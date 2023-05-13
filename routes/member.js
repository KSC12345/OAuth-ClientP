var express = require('express');
var logger = require('../log/log');
var router = express.Router();
var Member = require('../models/member');
var responseHelper = require('../helper/responseHelper');
var client = require('../helper/restClient');
var authClient = require('../lib/authClient')

/* GET member by memberId */
router.get('/', function(req, res, next) {
  //let member = getMember(req.params.memberId);
  //logger.info('Member: ' + JSON.stringify(member));

  res.status(200).json(responseHelper.successResponse({"test":"one"}));

});

router.get('/auth', async function(req, res, next) {

  const authorizeURI =await authClient.getAuthorizeURI();
  res.redirect(authorizeURI);

});

router.get('/authC', async function(req, res, next) {

  const accessToken =await authClient.getAccessTokenWithSecret();
  res.status(200).json(responseHelper.successResponse({"accessToken":accessToken}));

});



router.get('/oAuthCallback', async function(req, res, next) {
  //let member = getMember(req.params.memberId);
  //logger.info('Member: ' + JSON.stringify(member));

  const { code } = req.query;
    const options = {
      code,
    };

    const accessToken   = await authClient.getAccessTokenWithCode(options);

  res.status(200).json(responseHelper.successResponse({"accessToken":accessToken}));

});


/* GET member by memberId */
router.get('/rest', function(req, res, next) {

  client.get('https://jsonplaceholder.typicode.com/posts/1', function (data, response) {
      // parsed response body as js object
      console.log("data :: "+data);
      // raw response
    res.status(200).json(responseHelper.successResponse(data));
  }).on('error', function (err) {
      console.log('something went wrong on the request', err.request.options);
      next(err);
  });

});

// POST method route
router.post('/members', function (req, res,next) {
  const member = new Member({
    memberId: '1234',
    firstName: 'Jason',
    lastName:'Shmoe'
  });

  member.save()
    .then(savedMember => res.status(200).json(savedMember))
    .catch(e => next(e));

})

module.exports = router;
