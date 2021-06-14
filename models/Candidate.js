import mongoose from 'mongoose'

const candidateSchema = new mongoose.Schema({
    
    name:{type:String,required:true},
    email:{type:String,required:true},
    
},{
    timestamps:true
}

)
const Candidate = mongoose.model('Candidate',candidateSchema)
export default Candidate