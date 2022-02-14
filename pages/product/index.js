import Link from "next/link"
import {useRouter} from 'next/router'

function index({productId=100}) {
  const router=useRouter()
  const handelChange=()=>{
    alert('order is placed succesfully')
    router.push('/')

  }
  return (
    <div style={{textAlign:"center" ,marginTop:"50px"}}>
        <Link href='/product/product1'><a>product1</a></Link> <br/>
        <Link href='/product/product2' replace><a>product2</a></Link><br/>
        <Link href='/product/product3'><a>product3</a></Link><br/>
        <Link href='/product/product4'><a>product4</a></Link><br/>
        <Link href={`/product/${productId}`}><a>produt {productId}</a></Link><br/>
        <button onClick={handelChange}>OrdeerPlace</button>
    </div>
  )
}

export default index