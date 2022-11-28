import React from "react";

function Column() {

    var item = ['Hiii', 'Hello', 'Welcome']

    return (
        <React.Fragment>{
            item.map(item => {
                console.log(item);
               return  <td>{item}</td>
            })
        }
        </React.Fragment>
    )

}
export default Column;