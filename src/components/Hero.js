import React from 'react'
import '../style.css'
import mockup from '../images/mockup.jpg'

export default function Hero(){
    return(
        <section>
            <img src={mockup} className='hero--photo'></img>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Lorem ipsum picsum</p>
        </section>
    )
}