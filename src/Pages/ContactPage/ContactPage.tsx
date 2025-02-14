
import ContactComponent from "../../Components/Contact/Contact.Component"
import "./ContactPage.styles.css"

const ContactPage = () => {
  return (
    <div id="contact" className="zone black contact-container">
      <h3 >Contact me</h3>
      <p>
        Feel free to reach out me if you’d like to collaborate
      </p>
      <ContactComponent/>
    </div>
  )
}

export default ContactPage