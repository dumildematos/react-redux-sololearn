import React from "react";

function PeopleList(props){

    const arr = props.data;
    const listItems = arr.map((val,i) => {
        return <li key={i}>{val}</li>
    });
    return <ul>
        {listItems}
    </ul>

}

export default PeopleList;