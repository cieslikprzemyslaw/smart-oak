import React from 'react';
import Footer from '../components/staticComponents/Footer';
import MobileNav from '../components/staticComponents/MobileNav';
import Nav from '../components/staticComponents/Nav';
import ContactBody from '../components/pages/contact/'

const Contact = () => {
  return (
    <>
      <Nav />
      <MobileNav />
      <ContactBody />
      <Footer />
    </>
  );
};

export default Contact;