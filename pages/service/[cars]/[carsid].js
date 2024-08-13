import { useRouter } from "next/router"
export default ()=>{
    const router = useRouter()
    return(<>
 <h1>
 car type:{router.query.cars}
car type:{router.query.carsid}
 </h1>
    
    
 
    </>)
   }
   