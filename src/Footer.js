import React from "react";
import "./App.css";

const Footer = (props) => {
    return (
        <footer className="footer">
        <ul className="footer-list">
            {
        props.array.map((element, index) => <li key={index}>{element}</li>)
             }
        </ul>
        </footer>
    )
}
export default Footer;