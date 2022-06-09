import './index.css'

const LatestMatch = props =>{
    const {latestMatch} = props
    const {umpires,result,manOfTheMatch,
        id,date,venue,
        competingTeam,
        competingTeamLogo,
        firstInnings,
        secondInnings,
        } = latestMatch

    return(
        <div className="latest-match-container">
            <div className="team-name-logo-container">
                <div>
                    <h1 className='competing-team-name'>{competingTeam}</h1>
                    <p className='details-text'>{date}</p>
                    <p className='details-text'>{venue}</p>
                    <p className='details-text'>{result}</p>
                </div>
                <img src={competingTeamLogo} alt={`latest match-${competingTeam}`} className='competing-team-logo'/>
                <div>
                <h1 className='details-heading'>First Innings</h1>
                <p className='details-text'>{firstInnings}</p>
                <h1 className='details-heading'>Second Innings</h1>
                <p className='details-text'>{secondInnings}</p>
                <h1 className='details-heading'>Man Of The Match</h1>
                <p className='details-text'>{manOfTheMatch}</p>
                <h1 className='details-heading'>Umpires</h1>
                <p className='details-text'>{umpires}</p>

            </div>
            </div>
            
        </div>
    )
}

export default LatestMatch