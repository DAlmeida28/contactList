const ContactDetails = (props) => {

  return(
    <section>
  <h1>{props.selectedContact.name}</h1>
  <h2>Company Name:</h2>  
  <p>{props.selectedContact.company.name}</p>
  <h2>Address:</h2>
  <p>{props.selectedContact.address.street}</p>
  <p>{props.selectedContact.address.suite}</p>
  <p>{props.selectedContact.address.city}</p>
  <p>{props.selectedContact.address.zipcode}</p>
  <h2>Email:</h2>
  <p>{props.selectedContact.email}</p>

  <h2>{console.log(props.selectedContact)}</h2>
  </section>
  )
}

export default ContactDetails