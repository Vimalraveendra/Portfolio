import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import IconInfoComponent from "../IconInfo/IconInfo.Component";
import { FiGithub } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import Message from "../../../assets/email.svg"
import "./ContactInfo.styles.css"

const ContactInfoComponent = () => {
  return (
    <div className="info-container">
         <Message/>
         <div className="info-icons-container">
          <IconInfoComponent Icon={HiOutlineMail} text="vimalraveendra@gmail.com"/>
          <IconInfoComponent Icon={FiPhone} text="(+48) 514310542"/>
          <IconInfoComponent Icon={IoLocationOutline} text="Wroclaw,Poland"/>
          <IconInfoComponent Icon={FiGithub} text="Github"  link="https://github.com/vimalraveendra/"/>
          <IconInfoComponent Icon={MdLanguage} text="Website"  link="https://vimalraveendra.github.io/Portfolio/"/>
         </div>
    </div>
  )
}

export default ContactInfoComponent