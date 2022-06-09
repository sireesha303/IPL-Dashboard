import './index.css'

const MatchCard = props =>{
    const {matchDetails} = props
    const {result,
        competingTeam,
        competingTeamLogo,
        matchStatus} = matchDetails
    let matchStautsStyles;
     if(matchStatus === "Won"){
        matchStautsStyles = "win-match-status" 
     }
     else{
        matchStautsStyles = "lost-match-status"
     }

    return(

        <li className="recent-match-list-item">
            <img src={competingTeamLogo} className='recent-match-competing-team-logo' alt={`recent match ${competingTeam}`}/>
                <h1 className='competing-team-name-heading'>{competingTeam}</h1>
                <p className='details-text'>{result}</p>
                <p className={`${matchStautsStyles}`}>{matchStatus}</p>    
        </li>
        
    )
}

export default MatchCard