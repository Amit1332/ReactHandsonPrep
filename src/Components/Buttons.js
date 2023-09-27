import React, {Component, useState} from 'react'

export const Buttons = () => {

    const [classCompoRender, setClassCompoRender] = useState(null);
    const [functionCompoRender, setFunctionCompoRender] = useState(null);
    const [flag, setFlag] = useState(1);
    const [flag1, setFlag1] = useState(1);

    function classbased() {
        if(flag===1){
            setClassCompoRender(<ClassBasedComp />)
            setFlag(0);
        }
        else{
            setClassCompoRender(null);
            setFlag(1);
        }
    }


    function functionbased() {
        if(flag1===1){
            setFunctionCompoRender(<FunctionBasedComp />);
            setFlag1(0);
        }
        else{
            setFunctionCompoRender(null);
            setFlag1(1);
        }
        
    }
  return (
    <>
    
    <div className="container">
        <div className="left">
        <button onClick={classbased}>Class Based Component</button>
     {classCompoRender}


        </div>

        <div className="right">
        <button onClick={functionbased}>Function Based Component</button>
        {functionCompoRender}

        </div>

    </div>

   
    
   
    
    </>
  )
}


export class ClassBasedComp extends Component {
    constructor (){
        super()
        this.state = {
            first:"This is created using Class Component",
            second:"This is done using external css",
            third:"This is done using internal css",
        }
    }
    render(){
        return (
            <>
            <div className="card">
                <h2>{this.state.first}</h2>
                <h6>{this.state.second}</h6>
                <h6 style={{color:"red"}}>{this.state.third}</h6>

            </div>

            </>
        )
    }
}



function FunctionBasedComp(){
    return ( 
        <>
        
        <div className="card" style={{backgroundColor:"purple",color:"white"}}>
                <h2>This is created using Function Component</h2>
                <h6>This is done using external css</h6>
                <h6 style={{color:"green"}}>This is done using internal css</h6>
            </div>
        </>
    )
}