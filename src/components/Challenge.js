import { useEffect, useState } from "react";
import Users from './Users'
import Paginations from "./Paginations";

const Challenge = ()=>{

    const [data, setData] = useState([])
    const [pages,setPages] = useState(1)
    const [totalUsers, setTotalUsers] = useState(0)
    const [currentPage, setCurrentPage] = useState(1) 
    
    useEffect(()=>{
        const getChallenge = async () =>{
            const url = `https://moadw-challenge.herokuapp.com/api/find-many?skip=0&limit=100&sort=100`
            const api = await fetch(url).then((res) => res.json())
            setData(api)
            setTotalUsers(api.length)
                 
        }
        getChallenge()
            
            
    },[])

    useEffect(()=>{

        setPages(Math.ceil(totalUsers / 10))
    
      },[totalUsers])
    
      const handlePagination = (newPage) =>{
        setCurrentPage(newPage)
      }
    
      const list = data.slice((currentPage - 1) * 10, currentPage * 10).map((user) => 
      <Users key={user.id} user={user}/>)
    
    console.log(data)
    return(
        <div>
            <h1>PRUEBA TECNICA</h1>
            <Paginations 
          onPagination={handlePagination} 
          numOfPages={pages}/>  
        {list}
        <Paginations 
          onPagination={handlePagination} 
          numOfPages={pages}/>
        </div>
    )
    
}
    
export default Challenge

