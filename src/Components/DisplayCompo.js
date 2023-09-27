import React, { Component } from "react";
import { ClassBasedComp } from "./Buttons";

export class DisplayCompo extends Component {
    constructor(){
        super()
        this.state = {
          flag:0
        }


    }

    render(){
        
        return (
            <>
          {/* {this.state.flag &&  <ClassBasedComp/>} */}
          {this.state.flag ? <ClassBasedComp/> :null}

            <button onClick={()=> this.setState({flag:!this.state.flag})}>Increment</button>            
            </>
        )
    }
}