
var Status = require('../domain/status');
var RestResponse = require('../domain/RestResponse');
function successResponse(data) {

  let status  = new Status(200,'OK');
  return  new RestResponse(status,data);
}

function errorResponse(error) {

  let status  = new Status(error.status,error.message);
  return  new RestResponse(status);
}

module.exports = {successResponse,errorResponse};
