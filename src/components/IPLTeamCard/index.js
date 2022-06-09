import { Link } from 'react-router-dom'

import './index.css'


const IPLTeam = props =>{
    const {teamDetails} = props
    const {id,name,teamImageUrl} = teamDetails

    return(
        <li className='team-card'>
            <Link to={`/team-matches/${id}`}>
                    <img src={teamImageUrl} className="team-logo-img" alt="teamImage"/>
                    <p className='team-name'>{name}</p>
            </Link>
        </li>
        
       
    )
}

export default IPLTeam