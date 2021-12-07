import React, {createRef, RefObject} from 'react';
import {Route} from "react-router";
import {Routes} from "react-router-dom";
import Header from "./header/Header";
import './App.scss'
import ProjectComponent, {Project} from "./project/Project";


export default class App extends React.Component {
    projects: Project[] = [
        new Project('MS Paint IDE', ['Java', 'JavaScript', 'C#', 'HTML', 'SCSS', 'PHP'], 'A program to use a custom OCR (NewOCR) to read images and parse them as code, performing IDE actions including compilation, syntax highlighting, buildsystem support, basic refactoring, LSP integration, and Google Assistant support.', 'https://github.com/MSPaintIDE/MSPaintIDE', 'https://ms-paint-i.de/'),
        new Project('Craftathon', ['Java'], 'Lead the team at the charity organization Craftathon, raising $7,600 for children in domestic violence homes and shelters.', undefined, 'https://craftathon.org/'),
        new Project('HolySheet', ['Dart', 'Java', 'HTML', 'SCSS'], 'Developed an unlimited cold file storage system by efficiently encoding them into Google Sheets. This is serverless and highly scaleable with Docker & Kubernetes, hosted on AWS. The system is accessible through a file browser web app, native desktop app, CLI, REST API, gRPC API, and Java API.', 'https:/github.com/HolySheet/HolySheet'),
    ]

    private projectsRef: RefObject<HTMLDivElement> = createRef()

    render() {
        return (
            <div className="main-content-wrapper">
                <Header/>
                <div className="summary">
                    <p>Hello! I'm Adam Yarris, a 18-year-old programmer and Eagle Scout from New Hampshire. I've been programming as a hobby for around 6 years, devoting nearly all of my time to development of software and tools, some being more serious than others.
                        <br/>
                        <br/>
                        I try and make learning software development easy for others by helping them in various forums and Discord servers, and engaging others in programming.</p>
                </div>
                <div className="scroll-container">
                    <svg className="arrows">
                        <path className="a1" d="M0 0 L30 32 L60 0"/>
                        <path className="a2" d="M0 20 L30 52 L60 20"/>
                        <path className="a3" d="M0 40 L30 72 L60 40"/>
                    </svg>
                </div>
                <div ref={this.projectsRef} className="projects">
                    {this.projects.map((project) => <ProjectComponent project={project}/>)}
                </div>
                {/*<Routes>*/}
                    {/*<Route path="/" element={<Home/>}>*/}
                    {/*    <Route index element={<Home/>}/>*/}
                        {/*<Route path="dashboard" element={<Dashboard />} />*/}
                    {/*</Route>*/}
                    {/*<Route path="*" element={<NotFound/>}/>*/}
                {/*</Routes>*/}
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        let scrolling = window.scrollY + window.innerHeight
        let offset = (this.projectsRef?.current?.offsetTop ?? 0) + (window.innerHeight * 0.15)

        if (scrolling >= offset) {
            this.projectsRef.current?.classList.add('showing')
        } else if (scrolling < offset) {
            this.projectsRef.current?.classList.remove('showing')
        }
    }
}
