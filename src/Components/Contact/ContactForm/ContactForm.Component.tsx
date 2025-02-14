import {useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import FormInputComponent from "../FormInput/FormInput.Component";
import FormTextareaComponent from "../FormTextarea/FormTextarea.Component";
import ButtonComponent from "../../Button/Button.Component";
import { IDefaultFormFields } from "../../../Model/Portfolio.model";
import InfoModalComponent from "../InfoModal/InfoModal.Component";

import "./ContactForm.styles.css"



const defaultFormFields:IDefaultFormFields = {
  from_name: "",
  from_email: "",
  message:""

};

const API_KEY=import.meta.env.VITE_API_KEY;
const SERVICE_KEY=import.meta.env.VITE_SERVICE_KEY;
const TEMPLATE_KEY=import.meta.env.VITE_TEMPLATE_KEY;
console.log("api",API_KEY)
console.log("api2",SERVICE_KEY)


const ContactFormComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [error, setError] = useState<boolean>(false);
  const formRef= useRef<HTMLFormElement>(null);
  const[toggleInfoModal,setToggleInfoModal]=useState<boolean>(false)
  const { from_name,from_email,message } = formFields;

  const handleOnChange = (event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if(error){
        setError(false);
    }
    setFormFields({ ...formFields, [name]: value });
  
  };
  const handleToggleInfoModal = () => setToggleInfoModal(!toggleInfoModal);

  const handleOnSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_KEY, TEMPLATE_KEY, formRef.current, {
        publicKey: API_KEY,
      })
      .then(
        () => {
            setToggleInfoModal(true)
             setFormFields(defaultFormFields)
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (

    <form  className="form-container" ref={formRef} onSubmit={handleOnSubmit}>
      <FormInputComponent    
        type="text"
        name="from_name"
        placeholder="Your Name"
        required
        value={from_name}
        className="form-input"
        onChange={handleOnChange}
   
      />
      <FormInputComponent
        type="email"
        name="from_email"
        placeholder="Your Email"
        required
        className="form-input"
        value={from_email}
        onChange={handleOnChange}
      />
      <FormTextareaComponent
        name="message"
        rows={10}
        placeholder="Message"
        required
        className="form-textarea"
        value={message}
        onChange={handleOnChange}
        
      />
      <ButtonComponent type="submit"  buttonType="primary">Send</ButtonComponent>
     
      {toggleInfoModal && 
          <InfoModalComponent
            infoText={"Message Sent Successfully"}
            handleToggleInfoModal={handleToggleInfoModal}
          />
      }
    </form>

  )
}

export default ContactFormComponent