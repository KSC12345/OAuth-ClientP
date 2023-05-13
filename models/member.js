var mongoose = require('mongoose');


const ContractSchema = new mongoose.Schema({
  contractType:
  {
    type:String
  }
});
/**
 * Member Schema
 */
const MemberSchema = new mongoose.Schema({
  memberId: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  contract:{ type : ContractSchema}
});

const Member = mongoose.model('Member', MemberSchema);
module.exports = Member;
