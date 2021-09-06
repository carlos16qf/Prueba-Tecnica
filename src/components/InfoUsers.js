
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const InfoUsers = ()=>{
    const history = useHistory()
    const [data, setData] = useState()
    const [id] = useState(useParams().id);

    useEffect(()=>{

        const getData = async()=>{
            
                const donation = await fetch(`https://moadw-challenge.herokuapp.com/api/find-one?id=${id}`)
                const res = await donation.json()
                setData(res)
                
           
        }
        getData()
    },[id])
    

    if(!data){
        return null
    }
    return(
        <div>
            <div>
                <h2>{data.first_name} {data.last_name}</h2>
            </div>
            <img src={data.image} alt={data.image}/>
            <h2>{data.description}</h2>
            <div>
                <h4>TOTAL DONATIONS: {data.donations}</h4>
                <h4>DONATION: {data.total}</h4>
            </div>
            
            <button className="btn btn-info margin-button" onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default InfoUsers