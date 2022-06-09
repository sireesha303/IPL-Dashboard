import {Component} from 'react'
import './index.css'

import IPLTeamCard from '../IPLTeamCard'


// const iplTeamList = [{
//     id:"RCB",
//     name:"Royal Challengers",
//     teamImageUrl:"https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png"
// },
// {
//     id:"KKR",
//     name:"Royal Challengers testing",
//     teamImageUrl:"https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png"
// },
// {
//     id:"RCB",
//     name:"Royal Challengers",
//     teamImageUrl:"https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png"
// },
// {
//     id:"KKR",
//     name:"Royal Challengers testing",
//     teamImageUrl:"https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png"
// },{
//     id:"RCB",
//     name:"Royal Challengers",
//     teamImageUrl:"https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png"
// },

// ]


class Home extends Component{
    state = {iplTeamList:[]}
    
    componentDidMount(){
        this.getIPLTeamslist()
    }

    getIPLTeamslist = async () =>{
         const response = await fetch("https://apis.ccbp.in/ipl")
        const data = await response.json()
        // console.log(data.teams)
        const updatedData = data.teams.map(eachTeam =>({
            id:eachTeam.id,
            name:eachTeam.name,
            teamImageUrl:eachTeam.team_image_url
        }))
        this.setState({iplTeamList:updatedData})
    }


    render(){
        const {iplTeamList} = this.state

        return(
            <div className='app-bg-container'>
                <div className='app-content-container'>
                    <div className='logo-heading-container'>
                        <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="ipl-logo" className='logo-img'/>
                        <h1 className='main-heading'>IPL DashBoard</h1>
                    </div>
                    <ul className='team-card-container'>
                        {iplTeamList.map(eachTeam =>(
                        <IPLTeamCard teamDetails={eachTeam} key={eachTeam.id}/>
                        ))}  
                    </ul>
                </div>
            </div>
        )

    }
}

export default Home