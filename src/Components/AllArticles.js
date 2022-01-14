import {Link} from 'react-router-dom'
import React, { useContext } from 'react'
import { CatContext } from './Category/CatContext'
function AllArticles() {
    const [data] = useContext(CatContext)
    
    return (
        <div >
            <div className='FlexContainer'>
            {
            data.filter((value,index)=>index>=data.length-3).map((latest)=>
            <div  key={latest.Id}>
                      <div style={{cursor:"pointer"}} > <Link to={`/Reading/${latest.Id}`}><img className='cardImgBox' src={latest.Img}alt=""/> </Link></div>

                    <div >
                    <div className='cardTitle'>{latest.Name}</div>
                                    <span className='CardDesc '>About: {latest.About.slice(0,30)} ...</span>
                                     <p className='cardDate'>{latest.Category}<span className='CardDesc'>{latest.Date}</span></p>
                    </div>
            </div>
            ) }
            </div>
        </div>
    )
}

export default AllArticles