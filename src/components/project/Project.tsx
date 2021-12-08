import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Project.scss'
import {IconProp} from "@fortawesome/fontawesome-svg-core";

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

class LinkType {
    static GitHub = new LinkType('GitHub', ['fab', 'github'])
    static Website = new LinkType('Website link', 'globe')

    title: string;
    icon: IconProp;

    constructor(title: string, icon: IconProp) {
        this.title = title
        this.icon = icon
    }
}

export default class ProjectComponent extends React.Component<ProjectProps> {
    render() {
        let project = this.props.project
        return (
            <div className="Project">
                <div className="title-line">
                    <h4>{project.name}</h4>
                    <div className="languages">{project.languages.map((language) => <span key={language} className="language">{language}</span>)}</div>
                    {this.icon(project.website, LinkType.Website)}
                    {this.icon(project.github, LinkType.GitHub)}
                </div>
                <p>{project.description}</p>
            </div>
        )
    }

    icon(href: string | undefined, type: LinkType) {
        if (href === undefined) {
            return
        }

        return <a href={href} className="icon" target="_blank" rel="noreferrer" title={type.title}><FontAwesomeIcon icon={type.icon}/></a>
    }
}
