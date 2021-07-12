import { readdirSync } from 'node:fs';
import React  from 'react';

class App extends React.Component{
    constructor(props){
        super(props){
            this.state = {
                image:'assets/basketball.jpg',
    
            };
        }
        handleClick = (imgName) => {
            this.setState({
                name: "../assets/" 
            })
        }

    }

    render(){
        return(
            
            <div className = "center">
                <div className = "btn-div">
                    <button onClick = {(this.handleClick('basketball')) => {

                    }}>
                        basketball
                    </button>
                    <button onClick = {() => {

                    }}>
                        PubG
                    </button>
                    <button onClick = {() => {

                    }}>
                        Tiger
                    </button>
                    <button onClick = {() => {

                    }}>
                        Phone
                    </button>
                    <button onClick = {() => {

                    }}>
                        Laptop
                    </button>
                    <button onClick = {() => {

                    }}>
                        Cricket
                    </button>
            
            </div>
            <div className = "sec-padding">
                    <img src = "" alt = ""/>
            </div>
            </div>
        )
        
    }
}


export default App;
