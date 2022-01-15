import React, {useState} from 'react';
import ContactManager from './ContactManager';

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];
function ContactList(){
    
    return <div>
        <ContactManager data={contacts} />
    </div>
}

export default ContactList;