import React from "react";
import Styles from "./Contact.module.css";
import { SiLinktree } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className={`${Styles.contact}`}>
      <div className="container">
      <p className={Styles["title1"]}>
        <span className={Styles["title"]}>Contact Me</span>
      </p>
        <div className={` mb-5 ${Styles.row}`}>
          <div className={`${Styles.cardPart}`}>
            <SiLinktree />
            <p className="text-center mt-3">Linktree</p>
            <span className="text-muted text-center mt-0">linktr.ee/muhammad.fahad</span>
            <a
              href="https://linktr.ee/muhammad.fahad"
              className={`${Styles.btn}`}
              target="_black"
            >
              Checkout
            </a>
          </div>

          <div className={`${Styles.cardPart}`}>
            <FaLinkedinIn />
            <p className="text-center mt-3">Linkedin</p>
            <span className="text-muted text-center mt-0">https://bit.ly/3Pddv2Y</span>
            <a
              href="https://www.linkedin.com/in/fahad-moon/"
              className={`${Styles.btn}`}
              target="_black"
            >
              Send Message
            </a>
          </div>

          <div className={`${Styles.cardPart}`}>
            <AiOutlineMail />
            <p className="text-center mt-3">Email</p>
            <span className="text-muted text-center mt-0">mfahadhussain76@gmail.com
</span>
            <a
              href="mailto:mfahadhussain76@gmail.com
              "
              className={`${Styles.btn}`}
              target="_black"
            >
              Send Message
            </a>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
