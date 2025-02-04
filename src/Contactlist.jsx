import { useEffect, useState } from 'react';


const ContactList = () => {
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    const getContacts = async() =>{
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const retrievedContacts = await response.json();
      setAllContacts(retrievedContacts);
    }
    getContacts();
    console.log(allContacts);
  },[]);

  return(
    <ul>
      {allContacts.map(({name, id}) => {
        return (
          <li
          key={id}
          >
            {name}
          </li>
        )
      })}
    </ul>
  )
}


export default ContactList