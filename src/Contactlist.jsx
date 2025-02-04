import { useEffect, useState } from 'react';


const ContactList = (props) => {
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    const getContacts = async() =>{
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const retrievedContacts = await response.json();
      setAllContacts(retrievedContacts);
    }
    getContacts();
  },[]);

  return(
    <ul>
      {allContacts.map((contact) => {
        return (
          <li
          key={contact.id}
          onClick={() => {props.setSelectedContact(contact)}}
          >
            {contact.name}
          </li>
        )
      })}
    </ul>
  )
}


export default ContactList