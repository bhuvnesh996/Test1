import mongoose from 'mongoose'

const Test_Score_Schema = new mongoose.Schema({
  candidate:{type:mongoose.Schema.Types.ObjectId,ref:'Candidate',required:true},
  first_round:{type:Number,require:true,minimum: 0,maximum:10},
  second_round:{type:Number,require:true,minimum: 0,maximum:10},
  third_round :{type:Number,require:true,minimum: 0,maximum:10},
  total:{type:Number,require:true},
    
},{
    timestamps:true
}

)
const Test_Score = mongoose.model('Order',Test_Score_Schema)
export default Test_Score