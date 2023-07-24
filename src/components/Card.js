import React from 'react'
import star from '../../public/images/star.png'


export default function Card(props){
    let badgeText
    if(props.item.openSpots===0){
        badgeText="SOLD OUT"
    }
    else if(props.item.location==="Online"){
        badgeText="ONLINE"
    }
    return(
        <div className='card'>
            {badgeText && <div className='card--badge'>SOLD OUT</div>}
            <img src={`../images/${props.item.coverImg}`} className='card--image'/>
            <div className='card--stats'>
                <img src={star} className='card--star'/>
                <span>{props.item.stats.rating}</span>
                <span className='gray'>{props.item.stats.reviewCount} </span>
                <span className='gray'>{props.item.location} </span>
            </div>
            <p className='card--title'>{props.item.title} </p>
            <p className='card--price'><span className='bold'>{props.item.price} </span></p>
        </div>
    )
}