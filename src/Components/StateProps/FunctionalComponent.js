
function FunctionalComponent(props){
return (
    <>
    
    <h1>This is Functional Based Component created by { props.name} and <br/> if i want sum of a and b is <span style={{color:"red"}}>{props.a + props.b} 👍</span></h1>
    
    </>
)
}


export {FunctionalComponent}