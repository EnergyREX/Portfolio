import React from "react";

function TechSkills(props) {
    return (
        <article> 
            <img src={props.img} alt="Technology"/>
            <hr />
            <h1>{props.title}</h1>
            <hr/>
            <h2>{props.description}</h2>
            <h3>{props.section1}</h3>
                <p>{props.tech1} {props.tech2} {props.tech3} {props.tech4} {props.tech5}</p>
            <h3>{props.section2}</h3>
                <ul>
                    <li>{props.tool1}</li>
                    <li>{props.tool2}</li>
                    <li>{props.tool3}</li>
                    <li>{props.tool4}</li>
                    <li>{props.tool5}</li>
                </ul>
        </article>

    )
}

export default TechSkills;