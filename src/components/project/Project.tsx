import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Project.scss'

export class Project {
    name: string
    languages: string[]
    description: string
    github: string | undefined
    website: string | undefined


    constructor(name: string, languages: string[], description: string, github: string | undefined = undefined, website: string | undefined = undefined) {
        this.name = name;
        this.languages = languages;
        this.description = description;
        this.github = github;
        this.website = website;
    }
}

export interface ProjectProps {
    project: Project
}

export default class ProjectComponent extends React.Component<ProjectProps> {
    render() {
        let project = this.props.project
        return (
            <div className="Project">
                <div className="title-line">
                    <h4>{project.name}</h4>
                    <div className="languages">{project.languages.map((language) => <span className="language">{language}</span>)}</div>
                    <FontAwesomeIcon icon={["fab", "github"]} className="icon"/>
                </div>
                <p>{project.description}</p>
            </div>
        )
    }
}
