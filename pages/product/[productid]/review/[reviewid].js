import {useRouter} from 'next/router'

function reviewid() {
    const router=useRouter();
    const {productid,reviewid}=router.query
  return (
    <h1>this is dynamic routting of porduct id{productid} and review is {reviewid}</h1>
  )
}

export default reviewid