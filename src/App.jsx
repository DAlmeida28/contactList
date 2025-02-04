import ContactList from "./Contactlist.jsx"
import ContactDetails from "./ContactDetails.jsx"
import { useState } from "react"

function App() {
const [selectedContact, setSelectedContact] = useState({});

  return (
    <>
    <h1>My Favorite Contacts</h1>
    {selectedContact.id ? <ContactDetails selectedContact={selectedContact}/> : <ContactList setSelectedContact={setSelectedContact} />}
    </>
  )
}

export default App
