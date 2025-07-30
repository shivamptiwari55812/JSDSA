import database from "../model/databaseModel.js";

export const getScores = async(req ,res)=>{

    try{
        const {name,score} = req.body
        console.log(req.body)
        if(!name || typeof score !== "number"){
            return res.status(400).json({"message":"Bad Request"})
        }
        
        let Player = await database.findOne({name})
        if(!Player){
            Player = new database({name ,score})
            await Player.save()
        }
        else{
            Player.score += score
            await Player.save()
            return res.status(200).json({"message":"successfully stored score"})

        }
        
        return res.status(200).json({"message":"success"})

    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({"message":"error"})
    }
}


export const sendData =async(req,res)=>{
    try{
        const data = await database.find()
        console.log(data)
        return res.status(200).json(data)
    }
    catch(error){
        console.log(error)
        return res.status(400).json({"Message":"Error"})
    }
}