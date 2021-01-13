import React from 'react'
import './content.css'
const content=(props)=>{
    return(
        
            <div className="data">
            <h3>{props.header}</h3>
            <a href={props.link}><p>Link</p></a></div>
        
    )
}
export default content;