import React from 'react';

// class App extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             active:"basketball",
//         }
//     }
//         render() {
//             let labels = ['basketball','pubg','tiger','phone','laptop','cricket'];
//       return (
//         <>
//           <div className = 'buttons'>
//            {labels.map((label) => {
//                 return <button className = {this.state.active === label ? 'active' : ""} onClick = {() => {
//                     this.setState({
//                         active:label,
//                     })
//                 }}>{label}</button>
//             })}
//             </div>

//             <img alt = {this.state.active} src = {`./Images/${this.state.active}.jpg`}/>
    
//         </>
//     )
//         }
//     }
    
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            active:"basketball"
        }
    }
    render(){
        let labels = ['basketball','pubg','cricket','phone','laptop','tiger']
        return(
            <>
            <div className = "buttons">
                {labels.map(label => {
                    return <button onClick = {() => {
                        this.setState({
                            active:label
                        })
                    }}>{label}</button>
                })}
            </div>
            <img alt = {this.state.active} src={`./Images/${this.state.active}.jpg`}/>
            </>
        )
    }
}


export default App