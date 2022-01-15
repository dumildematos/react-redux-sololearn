import React  from 'react';

function MyList(props) {

    const arr = props.data;
    const listItems = arr.map((val, index) => {
        return <li key={index}>{val}</li>
    })

    return <div>
        <ul>
            {listItems}
        </ul>
    </div>

}

export default MyList;