import React, {useState} from 'react';

function AddPersonForm (props) {

    const [person , setPerson] = useState('');

    function handleSubmit(e){
        props.handleSubmit(person);
        setPerson('');
        e.preventDefault();
    }

    function handleChange(e){
        setPerson(e.target.value);
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={person} placeholder="Add new contact"/>
            <button type="submit">Add</button>
        </form>
    </div>;

}
export default AddPersonForm;