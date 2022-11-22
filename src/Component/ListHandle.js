import React from "react";
import ListHandle2 from "./ListHandle2";

function ListHandle() {

    const person = [
        { id: 1, name: 'jeya', age: 22 }, { id: 1, name: 'sam', age: 21 }, { id: 3, name: 'sat', age: 23 }
    ];
    const personList = person.map((person,index) => <ListHandle2 key={index} index={index} person={person}/>);
    return <div>{personList}</div>

}

export default ListHandle;