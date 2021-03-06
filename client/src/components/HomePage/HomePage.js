import React, { useContext, useState } from 'react'
import loggedContext from '../../utils/userContext';
import NewsPage from '../NewsPage/NewsPage';
import NavBar from '../Navbar/Navbar';
import Howl from '../Howl/Howl'
import './HomePage.css';

const followers = ['Sadiq', 'Vegeta', 'Buu', 'Trunks', 'Gohan'];

const Follower =({name})=>{
    return <div className='follower btn btn-danger'>{name}</div>
}

export default () => {
    const [filteredFollowers, setFilteredFollowers] = useState(followers)
    const [page, setPage] = useState('howls')
    const { user } = useContext(loggedContext);
    return (
        <>
        <NavBar setPage={setPage}/>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-2">
                        <div className='row'>
                            <img id="pic" src='https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png' className='img-fluid'/>
                        </div>
                        <input id='searchUser' placeholder='Search' onChange={e=> setFilteredFollowers(followers.filter(follower=> follower.toLowerCase().includes(e.target.value)))}/>
                        <div className='row' id='followers'>
                            {filteredFollowers.map(follower=> <Follower name={follower}/>)}
                        </div>
                    </div>
                    <div id='newsBlock' className="col-9">
                        <div className='row'>
                            <input id='hollarInput' placeholder='Hollar at your boy'/>
                            <button id='submitHollar' className='btn btn-secondary'>Hollar</button>
                        </div>

                        <div id="news" className= "container mt-5">
                            {page === 'news'? <NewsPage/> : <Howl/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}