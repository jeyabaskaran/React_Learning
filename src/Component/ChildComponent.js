import React from "react";


function ChildCompnent(props) {
    console.log(props);
    return (
        <div>
            <button onClick={()=>props.childController('Child')}>Child Component</button>
        </div>
    )
}

export default ChildCompnent;