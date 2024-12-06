import {React,useEffect} from "react";
import AOS from 'aos';

function ProjectSectionItem(props) {
    useEffect(()=>{
        AOS.init({
            duration:1050,
            offset:50,
        })
    })
    return (
        <>
            <p style={{ zIndex: '0' }} className='zoom-out-container' data-aos="fade-up">    
                <img 
                    src={props.imageSource} 
                    alt="Project" 
                    style={{ width: '100%', height: 'auto' }} 
                />
            </p>
            <h3 className="defbodyFont" data-aos="fade-up" data-aos-delay="400">{props.heading}</h3>
            <p className="defbodyFont" data-aos="fade-up" data-aos-delay="500">{props.subtext}</p>
        </>
    );
}

export default ProjectSectionItem;
