import React, { useContext } from 'react'
import SliderSingle from './SliderSingle'
import styles from './Slider.module.css'
import { AllDataContext } from '../../../../contextApi/DataContext'


export default function Slider() {
    const {portfolio:{portfolioPage:{portfolioSlider}}} = useContext(AllDataContext)
    return (
        <div className={`${styles.imageSlider}`}>
            <div className="pf-details-slider">
                {portfolioSlider.map((img)=>{
                    return <SliderSingle img={img} />
                })}
            </div>
        </div>
    )
}
