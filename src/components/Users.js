
import { Link } from "react-router-dom";

const Users =({user})=>{
    
    return(
        <div>
            <div>
                <h2>{user.first_name} {user.last_name}</h2>
            </div>
            <img src={user.image} alt={user.image}/>
            <div>
                <h4>DONATIONS: {user.donations}</h4>
            </div>
            <Link to ={`/${user.id}`}>
            <button className="btn btn-info margin-button">INFO</button>
            </Link>
        </div>
            
        

    )
}

export default Users