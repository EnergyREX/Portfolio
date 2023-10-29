import React from "react";

const date = new Date();
const year = date.getFullYear();

function Copyright() {
    return (
        <div className="footer__copyright">
        <p className="copyright__data">EnergyREX @ {year} <br/>
        You can use this code to learn on your own projects </p>
    </div>
    )
}

export default Copyright;