import { useRouter } from "next/router"
export default ()=>{
    const router = useRouter()
    return(<>
 <h1>
 postid {router.query.postid}
 </h1>
  </>)
   }