import React from "react";

const JSXCOmponent = () => {
    
    // with JSX 
    
    // return (
    //     <div>
    //         <h1>Hello jeya</h1>
    //     </div>

    // )

    // wwithout JSX  

    return React.createElement('div', { id: 1, className: "DummyData" },
     React.createElement('h1', null, 'Hello jeya'));
}
export default JSXCOmponent