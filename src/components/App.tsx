import React, {createRef, RefObject} from 'react';
import Header from "./header/Header";
import './App.scss'
import ProjectComponent, {Project} from "./project/Project";

export default class App extends React.Component {
    private projectsRef: RefObject<HTMLDivElement> = createRef()
    private arrowsRef: RefObject<HTMLDivElement> = createRef()

    state = {
        projects: [] as Project[]
    }

    render() {
        return (
            <div className="main-content-wrapper">
                <div className="top-screen">
                    <Header/>
                    <div className="summary">
                        <p>Hey! I'm Adam, a 20-year-old programmer and Eagle Scout from New Hampshire. I've been
                            programming as a hobby for around 8 years, devoting nearly all of my time to development of
                            software and tools, some being more serious than others.
                            <br/>
                            <br/>
                            I am currently in my sophomore year at RIT pursuing Computer Science, working as a software
                            developer at <a href="https://witr.rit.edu/" target="_blank" rel="noreferrer">WITR</a>.
                        </p>
                    </div>
                    <div ref={this.arrowsRef} className="scroll-container">
                        <svg className="arrows" onClick={() => this.scrollDown()}>
                            <path className="a1" d="M0 0 L30 32 L60 0"/>
                            <path className="a2" d="M0 20 L30 52 L60 20"/>
                            <path className="a3" d="M0 40 L30 72 L60 40"/>
                        </svg>
                    </div>
                </div>
                <div ref={this.projectsRef} className="projects">
                    {this.state.projects.map((project) => <ProjectComponent key={project.name} project={project}/>)}
                </div>
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, {passive: true})

        fetch('/projects.json').then((res: Response) => res.json())
            .then((json) =>
                this.setState({
                    projects: json as Project[]
                }))
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

    scrollDown() {
        let arrows = this.arrowsRef?.current
        let top1 = arrows?.offsetTop ?? 0
        let top2 = arrows?.clientHeight ?? 0
        window.scroll({
            top: top1 + top2,
            behavior: 'smooth'
        })
    }
}
