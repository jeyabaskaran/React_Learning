import React from "react";

function ListHandle2({ person, index }) {

    return (<div>
        <h2> {index} I am {person.name}. I am {person.age} years old</h2>
    </div>)
}

export default ListHandle2;