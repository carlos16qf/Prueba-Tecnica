// import {getChallenge} from './getChallenge'
import { useEffect, useState } from 'react'
const Challenge= () => {
    
    const [name, setname] = useState('')
    const [name1, setname1] = useState('')
    const [name2, setname2] = useState('')
    const [name3, setname3] = useState('')
    const [name4, setname4] = useState('')
    const [name5, setname5] = useState('')
    const [lastName, setLastName] = useState('')
    const [lastName1, setLastName1] = useState('')
    const [lastName2, setLastName2] = useState('')
    const [lastName3, setLastName3] = useState('')
    const [lastName4, setLastName4] = useState('')
    const [lastName5, setLastName5] = useState('')
    const [donation, setDonation] = useState('')
    const [donation1, setDonation1] = useState('')
    const [donation2, setDonation2] = useState('')
    const [donation3, setDonation3] = useState('')
    const [donation4, setDonation4] = useState('')
    const [donation5, setDonation5] = useState('')
    const [total, setTotal] = useState('')
    const [total1, setTotal1] = useState('')
    const [total2, setTotal2] = useState('')
    const [total3, setTotal3] = useState('')
    const [total4, setTotal4] = useState('')
    const [total5, setTotal5] = useState('')
    const [image, setImage] = useState('')
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')
    const [image5, setImage5] = useState('')
    const [description, setDescription] = useState('')
    const [description1, setDescription1] = useState('')
    const [description2, setDescription2] = useState('')
    const [description3, setDescription3] = useState('')
    const [description4, setDescription4] = useState('')
    const [description5, setDescription5] = useState('')
    
    
    useEffect(()=>{
        

        const api= async()=>{
            const url = `https://moadw-challenge.herokuapp.com/api/find-many?skip=0&limit=100&sort=5000`
            const data = await fetch(url).then((res) => res.json())
                
            console.log(data)
            setname(data[0].first_name)
            setname1(data[1].first_name)
            setname2(data[2].first_name)
            setname3(data[3].first_name)
            setname4(data[4].first_name)
            setname5(data[5].first_name)
            setLastName(data[0].last_name)
            setLastName1(data[1].last_name)
            setLastName2(data[2].last_name)
            setLastName3(data[3].last_name)
            setLastName4(data[4].last_name)
            setLastName5(data[5].last_name)
            setDonation(data[0].donations)
            setDonation1(data[1].donations)
            setDonation2(data[2].donations)
            setDonation3(data[3].donations)
            setDonation4(data[4].donations)
            setDonation5(data[5].donations)
            setTotal(data[0].total)
            setTotal1(data[1].total)
            setTotal2(data[2].total)
            setTotal3(data[3].total)
            setTotal4(data[4].total)
            setTotal5(data[5].total)
            setImage(data[0].image)
            setImage1(data[1].image)
            setImage2(data[2].image)
            setImage3(data[3].image)
            setImage4(data[4].image)
            setImage5(data[5].image)
            setDescription(data[0].description)
            setDescription1(data[1].description)
            setDescription2(data[2].description)
            setDescription3(data[3].description)
            setDescription4(data[4].description)
            setDescription5(data[5].description)
            
            
            
            
                
        }
        api()
        
        
    },[])

    return (
        <div>
            <h1>PRUEBA TECNICA</h1>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='margin border border-white'>
                        
                        <div>
                            {name}  {lastName} 
                            
                        </div>
                        <img src={image} className='rounded-circle' alt={image}/>
                        <div>
                            TOTAL DONATIONS: {donation}
                            
                        </div>
                        <button type="button" className="btn btn-info margin-button">INFO</button>
                    </div>
                    <div className='margin border border-white'>
                        <div>
                            {name1}  {lastName1}
                        </div>
                        <img src={image1} className='rounded-circle' alt={image1}/>
                        <div>
                            TOTAL DONATIONS: {donation1}
                            
                        </div>
                        <button type="button" className="btn btn-info margin-button">INFO</button>
                    </div>
                    <div className='margin border border-white'>
                        <div>
                            {name2}  {lastName2}
                        </div>
                        <img src={image2} className='rounded-circle' alt={image2}/>
                        <div>
                            TOTAL DONATIONS: {donation2}
                            
                        </div>
                        <button type="button" className="btn btn-info margin-button">INFO</button>
                    </div>
                    <div className='margin border border-white'>
                        <div>
                            {name3}  {lastName3}
                        </div>
                        <img src={image3} className='rounded-circle' alt={image3}/>
                        <div>
                            TOTAL DONATIONS: {donation3}
                            
                        </div>
                        <button type="button" className="btn btn-info margin-button">INFO</button>
                    </div>
                    <div className='margin border border-white'>
                        <div>
                            {name4}  {lastName4}
                        </div>
                        <img src={image4} className='rounded-circle' alt={image4}/>
                        <div>
                            TOTAL DONATIONS: {donation4}
                            
                        </div>
                        <button type="button" className="btn btn-info margin-button">INFO</button>
                    </div>
                    <div className='margin border 3px border-white'>
                        <div>
                            {name5}  {lastName5}
                        </div>
                        <img src={image5} className='rounded-circle' alt={image5}/>
                        <div>
                            TOTAL DONATIONS: {donation5}
                            
                        </div>
                        <button type="button" className="btn btn-info margin-button">INFO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Challenge