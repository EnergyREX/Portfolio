import React from "react";

function Card(props) {
    return (
    <article className={props.class}>
        <h1>{props.title}</h1>
        <h2>{props.desc}</h2>
        <img src={props.bgImg} alt="background"/>
    </article>
    )
}

export default Card