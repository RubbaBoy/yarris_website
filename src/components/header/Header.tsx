import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Header.scss'

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <h1>Adam Yarris</h1>
                <div className="icon-row">
                    <a href="mailto:adam@yarr.is" title="adam@yarr.is" className="icon" target="_blank"><FontAwesomeIcon icon={"envelope"} /></a>
                    <a href="https://github.com/RubbaBoy" title="GitHub" className="icon" target="_blank"><FontAwesomeIcon icon={["fab", "github"]}/></a>
                    <a href="https://www.linkedin.com/in/adam-yarris/" title="LinkedIn" className="icon" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
                    <a href="https://yarr.is/resume" title="Resume" className="icon" target="_blank"><FontAwesomeIcon icon={"file"} /></a>
                </div>
            </div>
        )
    }
}
