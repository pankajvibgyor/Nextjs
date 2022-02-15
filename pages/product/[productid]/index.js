
import {useRouter} from 'next/router'
function Index() {
  const router = useRouter()
  const value=router.query.productid
  return (
    <div>
        <h1>this is dynamic routting {value}</h1>
    </div>
  )
}

export default Index