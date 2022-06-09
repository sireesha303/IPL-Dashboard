import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

const TeamMatches = () => {

    const [teamdetails,setTeamDetails] = useState({
        teamBannerUrl:"",
        latestMatchDetails:{},
        recentMatches:[],
    })

    const {id} = useParams();


    useEffect(() => {
        async function fetchData(){
            const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
            const data = await response.json()
            //console.log(data)
            // console.log(data.team_banner_url)
            

            const updatedTeamBannerUrl = data.team_banner_url
            // console.log(updatedTeamBannerUrl)
            const updatedLatestMatchDetails = {
                umpires:data.latest_match_details.umpires,
                result:data.latest_match_details.result,
                manOfTheMatch:data.latest_match_details.man_of_the_match,
                id:data.latest_match_details.id,
                date:data.latest_match_details.date,
                venue:data.latest_match_details.venue,
                competingTeam:data.latest_match_details.competing_team,
                competingTeamLogo:data.latest_match_details.competing_team_logo,
                firstInnings:data.latest_match_details.first_innings,
                secondInnings:data.latest_match_details.second_innings,
                matchStatus:data.latest_match_details.match_status
            }
            const updatedRecentMatches = data.recent_matches.map(eachMatch =>({
                umpires:eachMatch.umpires,
                result:eachMatch.result,
                manOfTheMatch:eachMatch.man_of_the_match,
                id:eachMatch.id,
                date:eachMatch.date,
                venue:eachMatch.venue,
                competingTeam:eachMatch.competing_team,
                competingTeamLogo:eachMatch.competing_team_logo,
                firstInnings:eachMatch.first_innings,
                secondInnings:eachMatch.second_innings,
                matchStatus:eachMatch.match_status
            }))
           

            setTeamDetails({
                teamBannerUrl:updatedTeamBannerUrl,
                latestMatchDetails:updatedLatestMatchDetails,
                recentMatches:updatedRecentMatches
            })

            // console.log(teamdetails.recentMatches)
        }
        fetchData();
      }, []); 

    return(
        <div className='team-matches-bg-container'>
            <div className='team-matches-details-container'>
                <img src={teamdetails.teamBannerUrl} alt={`Team Banner URL -${id}`} className='team-banner-img'/>
                <p className='matches-heading'>Latest Matches</p>
                <LatestMatch  latestMatch={teamdetails.latestMatchDetails}/>
                <ul className='recent-matches-list'>
                    {teamdetails.recentMatches.map(eachMatch =>
                        <MatchCard matchDetails={eachMatch}/>
                    )}
                </ul>
            </div>
            
        </div>
        
    )
}


export default TeamMatches