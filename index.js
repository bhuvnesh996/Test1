import express from 'express'
import mongoose from 'mongoose'
import Candidate from './models/Candidate.js';
import Test_Score from './models/Test_Score.js';

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect( 'mongodb://localhost/Test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.post('/student/register',async (req,res)=>{                                               /* inserting in candidate field */

    const candidate = new Candidate({
        name:req.body.name,
        email:req.body.email
    })
    const createdCandidate = await candidate.save()
    
    res.send({
        _id:createdCandidate._id,
        name:createdCandidate.name,
        email:createdCandidate.email,
    })
})
app.get('/student',async(req,res) => {
    const data = await Candidate.find({})                                          /* get request to check all candidate */ 
    res.send(data)
})

app.get('/student/:id',async(req,res) => {
    const data = await Candidate.findById(req.params.id).catch(err=>res.status('404').send("ID doesn't exist"))                /*get request to check particular candidate */
    res.send(data)
})


app.get('/scores/average', async (req, res) => {
    const data = await Test_Score.aggregate([{$group: {_id:null, first_round: {$avg:"$first_round"},second_round:{$avg:"$second_round"},third_round:{$avg:"$third_round"} } }]).catch(err => res.status('404').send("Data not found"));
    res.send(data)
})
                                                                                                                                       /* get request to check average per round score  */


app.get('/scores/highest', async (req, res) => {
    const data = await Test_Score.aggregate([{ $sort: { total: -1 } }]).catch(err => res.status('404').send("Data not found"));
    console.log(data)
    const id = await data[0].candidate;
    const cand = await Candidate.findById(id);                                                                                         /* get highest score */
    data[0].name = cand.name;
    data[0].email = cand.email;
    res.send(data[0]);
})


app.get('/scores/:id', async (req, res) => {
    const data = await Test_Score.findById(req.params.id).catch(err=>res.status('404').send("ID doesn't exist"))             /* get request to check score for particular  candidate */
    res.send(data)
})
app.get('/scores', async (req, res) => {
    const data = await Test_Score.find({}).populate('candidate','name')                                        /* get request to check score of all candidate */
    res.send(data)
})






app.post('/testscore/:id',async(req,res)=>{
    const data = await Candidate.findById(req.params.id).catch(err=>res.status('404').send(err))
        const test_score = new Test_Score({
            candidate:req.params.id,
            first_round:req.body.first_round,
            second_round:req.body.second_round,
            third_round: req.body.third_round,
            total: Number(req.body.first_round) + Number(req.body.second_round) + Number(req.body.third_round),                            /* post request to assign the marks */
        })
    const createdTestScore = await test_score.save()
    res.status(201).send({
        
        first_round:createdTestScore.first_round,
        second_round:createdTestScore.second_round,
        third_round:createdTestScore.third_round
    })}
)




const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("Server running")
})