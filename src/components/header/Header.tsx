import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Header.scss'

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <h1>Adam Yarris</h1>
                <div className="icon-row">
                    <FontAwesomeIcon icon={"envelope"} />
                    <FontAwesomeIcon icon={["fab", "github"]}/>
                    <FontAwesomeIcon icon={["fab", "linkedin"]}/>
                    <FontAwesomeIcon icon={"file"} />
                </div>
            </div>
        )
    }
}
