import React, {Component} from "react";


class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
                first:"Class Based Component"
        }
    }


    render(){
        return (
            <>
            <h1>This is {this.state.first} and created by {this.props.name} and age is <span style={{color:"purple"}}>{this.props.age}</span></h1>
            </>
        )
    }
}


export {ClassComponent}