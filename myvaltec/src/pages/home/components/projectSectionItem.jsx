import React from "react";

function ProjectSectionItem(props) {
    return (
        <>
            <p style={{ zIndex: '0' }}>
                <img 
                    src={props.imageSource} 
                    alt="Project" 
                    style={{ width: '100%', height: 'auto' }} 
                />
            </p>
            <h3>{props.heading}</h3>
            <p>{props.subtext}</p>
        </>
    );
}

export default ProjectSectionItem;
