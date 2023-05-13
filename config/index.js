switch (process.env.NODE_ENV) {
  case 'development':
    module.exports = require('./bootstrap.development');
    break;
  case 'test':
    module.exports = require('./bootstrap.test');
    break;
    case 'stage':
      module.exports = require('./bootstrap.stage');
      break;
  case 'production':
    module.exports = require('./bootstrap.production');
    break;
  default:
    console.error("Unrecognized NODE_ENV: " + process.env.NODE_ENV);
    module.exports = require('./bootstrap.development');
}
