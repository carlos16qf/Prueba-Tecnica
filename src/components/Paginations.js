import { useEffect, useState } from "react"

const Paginations = ({numOfPages, onPagination}) =>{
    const [data,setData] = useState(new Array(numOfPages).fill(1))
    useEffect(()=>{
        setData(new Array(numOfPages).fill(1))
    },[numOfPages])

    const list= data.map((value, index)=>(
    <button key={index} type="button" className="btn btn-info margin-button" onClick={() => onPagination(index +1)}>{index + 1}</button>))

    return <div>{list}</div>
}

export default Paginations