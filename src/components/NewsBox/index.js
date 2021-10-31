import React,{useEffect} from "react";
import './style.css'

const NewsBox = ({item}) => {


    return <a className="newsbox"
                href={item.link}
                target="_blank">
        
            <img 
                className="img"
                src={item.thumbnail} />
            <p className="title">
                {item.title}
            </p>
            <div className="detail">
            <span>
                {item.source}
            </span>
            <span>
                {item.date}
            </span>
            </div>
            

        </a>
    
}

export default NewsBox;