/* eslint-disable react/jsx-no-target-blank */
import CommonHeader from "../CommonHeader/CommonHeader";
import HeaderImage from "../../assets/images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <CommonHeader title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quis
        consequatur corporis similique optio fugit. Ipsa possimus enim rem nisi
        reprehenderit.
      </CommonHeader>

      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a
              href="mailto:demo@gmail.com"
              target="_blank"
              rel="norefferrer noopener"
            >
              <MdEmail />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="norefferrer noopener"
            >
              <BsMessenger />
            </a>

            <a
              href="https://wa.me/+8801986898504"
              target="_blank"
              rel="norefferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
