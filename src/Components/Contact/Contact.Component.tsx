
import "./Contact.styles.css"
import ContactFormComponent from "./ContactForm/ContactForm.Component"
import ContactInfoComponent from "./ContactInfo/ContactInfo.Component"

const ContactComponent = () => {
  return (
    <div className="contact-main-container">
        <ContactFormComponent/>
        <ContactInfoComponent/>
    </div>
  )
}

export default ContactComponent