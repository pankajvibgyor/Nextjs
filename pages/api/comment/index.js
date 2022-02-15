import {comments} from '../../../data/coments'

export default function handler(req,res){
    if(req.method=='GET'){
    res.status(200).json(comments)
    }
    else if(req.method ==='POST'){
        const comment=req.body.comment
        console.log(comment)
        const newComment={      
        id:Date.now(),
        text:comment,

    }
    console.log(newComment)
    comments.push(newComment)
    res.status(201).json(newComment)
}

}