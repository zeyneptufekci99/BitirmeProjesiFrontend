import "./index.style.css";

import Layout from "../../components/Layout/Layout";

import React from "react";
import CommentForm from "../../forms/Contact/ContactForm";
import ContactForm from "../../forms/Contact/ContactForm";
import ContactBox from "../../components/ContactBox/ContactBox";

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <div className="contactBase">
          <div className="contactContainer">
            <ContactBox
              name="Betül Özgen"
              no="0532"
              mail="fatmabetulozgen@hotmail.com"
              schoolNo="16 01565"
            ></ContactBox>
            <ContactBox
              name="Zeynep Tüfekçi"
              no="0532"
              mail="fatmabetulozgen@hotmail.com"
              schoolNo="16 01565"
            ></ContactBox>
          </div>
          <br />
          <div className="infoBanner">
            Dilediğiniz zaman bize mesaj gönderebilirsiniz. Biz size ulaşırız !
          </div>

          <ContactForm></ContactForm>
        </div>
      </Layout>
    );
  }
}

export default Contact;
