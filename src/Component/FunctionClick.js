import React from "react";

function FunctionClick() {

    function changeHandler() {
        console.log('Button Clicked');
    }
    console.log('render');
    return (
        <div>
            <button onClick={()=>changeHandler()}>Click</button>
        </div>

    )
}
export default FunctionClick;