import {useState} from 'react'
function Index() {
    const[comments,setComments]=useState([])
    const[comment,setComment]=useState('')

    const fetchComments=async()=>{
        const response=await fetch('/api/comment')
        const data =await response.json()
        setComments(data)
    }
    const submit=async()=>{
        const response=await fetch('api/comment',{
            method:'POST',
            body:JSON.stringify({comment}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        const data =await response.json()
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <input type='text'
         value={comment}
          onChange={(e)=>setComment(e.target.value)}/>
        
        <button onClick={submit}>Submit</button>
        <button onClick={fetchComments}>Load comments</button>
        {
            comments.map(comment=>{
                return(
                    <div key={comment.id}>
                        {comment.id} {comment.text}
                        </div>
                )
            })
        }
    </div>
  )
}

export default Index