import React,{Component} from 'react';

export class Home extends Component {
    render() {
        return(
            <div>
                <h2>Summary of the Project</h2>

                <span style={{textAlign:"left"}}>
                <h3>Tech Stack Used</h3>
                <ul>
                    <li>Django - Backend API server</li>
                    <li>ReactJs - Frontend Library</li>
                    <li>Three.js - Loading 3D Models in Frontend</li>
                    <li>Bootstrap - Tables</li>
                    <li>@react-three/fiber - Helper to render 3d Model in react</li>
                </ul>

                <h3>Learnings from it</h3>
                <ul>
                    <li><strong>Three.js - </strong> an awesome Library , wanted to also add some more controls in the project , but couldn't figure out in time .</li>
                </ul>
                </span>
            </div>
        )
    }
}
