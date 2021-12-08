import React, {createRef, RefObject} from 'react';
import {Route} from "react-router";
import {Routes} from "react-router-dom";
import Header from "./header/Header";
import './App.scss'
import ProjectComponent, {Project} from "./project/Project";


export default class App extends React.Component {
    projects: Project[] = [
        new Project('MS Paint IDE',
            ['Java', 'JavaScript', 'C#', 'HTML', 'SCSS', 'PHP'],
            'A program to use a custom OCR (NewOCR) to read images and parse them as code, performing IDE actions including compilation, syntax highlighting, buildsystem support, basic refactoring, LSP integration, and Google Assistant support.',
            'https://github.com/MSPaintIDE/MSPaintIDE',
            'https://ms-paint-i.de/'),
        new Project('Craftathon',
            ['Java'],
            'Lead the team at the charity organization Craftathon, raising $7,600 for children in domestic violence homes and shelters.',
            undefined,
            'https://craftathon.org/'),
        new Project('HolySheet',
            ['Dart', 'Java', 'HTML', 'SCSS'],
            'Developed an unlimited cold file storage system by efficiently encoding them into Google Sheets. This is serverless and highly scaleable with Docker & Kubernetes, hosted on AWS. The system is accessible through a file browser web app, native desktop app, CLI, REST API, gRPC API, and Java API.',
            'https:/github.com/HolySheet/HolySheet'),
        new Project('NewOCR',
            ['Java'],
            `Constructed an OCR from scratch, with 98+% accuracy on all printable ASCII characters on trained fonts. Designed to read computer-generated text of an arbitrary size on a trained font, and provide typeset data used to reconstruct the input image with modified text. This project cited several research papers on similar technology to make a unique detection system.`,
            'https://github.com/MSPaintIDE/NewOCR',
            'https://wiki.newocr.dev/'),
        new Project('BYOB', ['TypeScript'],
            'A GitHub Action and service to allow for dynamically updated README badges from GitHub Action triggers.',
            'https://github.com/RubbaBoy/BYOB',
            'https://github.com/marketplace/actions/bring-your-own-badge'),
        new Project('ChatFilter', ['Java'],
            'A fast and highly configurable chat filter, targeted to be used in multiplayer games. Made for Craftathon, with benchmarking and full specifications available.',
            'https://github.com/RubbaBoy/ChatFilter'),
        new Project('EmojIDE', ['Java'],
            'A working and reactive IDE in Discord emojis, featuring emoji management across 41 Discord servers. This was made for the r/ProgrammerHumor Hackathon, getting second place.',
            'https://github.com/RubbaBoy/EmojIDE',
            'https://www.youtube.com/watch?v=06pMgnB6e6o'),
        new Project('BFJVM', ['Java'],
            'A program to compile Brainfuck into JVM classes without the use of any libraries or external tools for compiling.',
            'https://github.com/RubbaBoy/BFJVM'),
        new Project('Notedown', ['Dart'],
            'A markdown-based note taking app made in Flutter. Complete with Google authentication for cross-platform syncing.',
            'https://github.com/RubbaBoy/Notedown'),
        new Project('Spogit', ['Java'],
            'Spotify playlists over Git. This allows for pushing playlists to Git servers such as GitHub, and making forks and PRs to other people\'s playlists.',
            'https://github.com/RubbaBoy/Spogit'),
        new Project('BinaryCamera', ['Java'],
            'BinaryCamera\'s goal is to allow the user to type in their computer using nothing but their light. The binary is typed in by turning their light on/off as ones and zeros, recorded through their webcam.',
            'https://github.com/RubbaBoy/BinaryCamera',
            'https://www.youtube.com/watch?v=RxDjbndYzxo'),
        new Project('CodeFormatter', ['Java'],
            'Formats your code (Or whole GitHub repos) by moving all brackets and semicolons to the side in a perfect line to match your perfect code.',
            'https://github.com/RubbaBoy/CodeFormatter',
            'https://rubbaboy.me/codeformatter/'),
        new Project('WSS', ['JavaScript', 'HTML', 'CSS'],
            'Convert nested CSS into full webpages, with the ability to recreate any webpage in just CSS.',
            'https://github.com/RubbaBoy/WSS')
    ]

    private projectsRef: RefObject<HTMLDivElement> = createRef()

    render() {
        return (
            <div className="main-content-wrapper">
                <Header/>
                <div className="summary">
                    <p>Hey! I'm Adam Yarris, a 19-year-old programmer and Eagle Scout from New Hampshire. I've been
                        programming as a hobby for around 8 years, devoting nearly all of my time to development of
                        software and tools, some being more serious than others.
                        <br/>
                        <br/>
                        I currently work as a software developer at <a href="https://witr.rit.edu/">WITR</a>, remaking all website-related components of the radio station.
                        </p>
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
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, {passive: true})
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
