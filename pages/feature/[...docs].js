import {useRouter} from 'next/router'

function docs() {
    const router=useRouter()
    const {params=[]}=router.query
   
  return (
    <div>
      
            <h1>Home page </h1>

         
       
    </div>
  )
}

export default docs