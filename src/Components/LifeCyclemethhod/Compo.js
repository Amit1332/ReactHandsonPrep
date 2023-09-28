import React, { Component } from "react";


class Compo extends Component{
    constructor(){
        super()
        this.state = {
            count:0,
            total:5,
            data:true

        }
        console.log("1. Constructor")
    }

    componentDidMount(){
        console.log("3. componentDidMount")

    }

    componentDidUpdate(){
        console.log("4. componentDidUpdate")

    }



    render(){
        console.log("2. render")

        return(
            <>
            <h1>Hi ... </h1>

            {/* <h2>Count: {this.state.count}  , Total :{ this.state.total}</h2> */}
            <h2>{this.state.data ? <Unmount/> : ''}</h2>


            {/* <button onClick={()=> this.setState({count:5,total:20})}
             style={{padding:"5px 15px",fontSize:"25px", borderRadius:"5px", background:"crimson",color:"white"}}
            > Click</button> */}
             <button onClick={()=> this.setState({data: !this.state.data})}
             style={{padding:"5px 15px",fontSize:"25px", borderRadius:"5px", background:"crimson",color:"white"}}
            > Click</button>
            </>
        )
    }
}

export class Unmount extends Component {
    componentWillUnmount(){
        console.log("5. Unmount Phase")
    }

    render(){
        return (
            <>
            <h1>This is UnmountPhase</h1>
            </>
        )
    }
}

export {Compo}