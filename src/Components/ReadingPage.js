import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CatContext } from './Category/CatContext'
import {Link} from 'react-router-dom'
import ClapCount from './Hoc/ClapCount'

function Reading() {
    const { id } = useParams();
    let result=[]
    const MoreResult=[]
    const [data] = useContext(CatContext);
    data.forEach((a)=>{
        if (a.Id===id) {
        result.push(a.Category)
               
            
    }})
    const category=result[0]
    data.forEach((a)=>{
        if ((a.Category===category)&&(a.Id!==id)) {
            MoreResult.push(
            {  id:a.Id,
                category:a.Category,
                name: a.Name,
                img: a.Img,
                date:a.Date,
                about:a.About
            })
        }
    })
    
    
    

       
    return (
        <div>
        <div className="FlexContainer readJustifyCenter ">
           
            {data.filter((dataa) => dataa.Id===id).map((result) =>
            <div className="ReadArtBox borderShadow">
                <div className="txtAlignCenter">{result.Name}</div>
                <div><img  className="readArtImg" alt="Article" src={result.Img}/></div>
                <div className=" ReadArtBox">{result.About}</div>
            </div>
            
            )
        }
        
        </div>
        <ClapCount/>
<div className='LatestText'><div className='articleText'>More </div> Latest  Article</div>


             <div className='FlexContainer'>

                {MoreResult.filter((value,index) => index<6).map((latest) => 
                            <div key={latest.id}>
                                
                                <div style={{cursor:"pointer"}} > <Link to={`/Reading/${latest.id}`}><img className='cardImgBox' src={latest.img}alt=""/> </Link></div>
                                <div>
                                    <div className='cardTitle'>{latest.name}</div>
                                    <span className='CardDesc '>About : {latest.about.slice(0,30)} </span>
                                    <p className='cardDate'>{latest.category}<span className='CardDesc'>{latest.date}</span></p>
                               </div>
                           </div>
                        ) }
                        </div>
        </div>
    )
}

export default Reading